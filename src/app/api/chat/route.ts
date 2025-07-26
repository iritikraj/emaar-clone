// app/api/ai/chat/route.ts

import { OpenAI } from 'openai'
import { createDataStreamResponse } from 'ai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export const runtime = 'edge'

export async function POST(req: Request) {
  const res = await req.json();
  const { messages, context } = res;

  // Create a system message with real estate context
  const systemMessage = {
    role: 'system',
    content: `You are an AI assistant for Emaar Properties, a premier luxury real estate developer. 
    Your role is to provide information about properties, neighborhoods, pricing, and availability.
    
    Company Context:
    - Specializes in ${context.specialties.join(', ')}
    - Key locations: ${context.locations.join(', ')}
    - Known for ultra-luxury developments and premium amenities
    
    Guidelines:
    1. Be professional yet friendly
    2. Keep responses concise but informative
    3. If unsure, direct users to contact sales team
    4. Never make up pricing or availability details
    5. For specific unit questions, request property ID if not provided
    
    Current Date: ${new Date().toLocaleDateString()}`
  }
  const response = createDataStreamResponse({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    execute: async (stream: any) => {
      try {
        const response = await openai.chat.completions.create({
          model: 'omni-moderation-latest',
          stream: true,
          messages: [systemMessage, ...messages],
          temperature: 0.3,
          max_tokens: 500
        });

        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            stream.write({ type: 'text', value: content });
          }
        }

        stream.end(); // <-- Important to end stream
      } catch (err) {
        console.error('OpenAI stream error:', err);
        stream.write({ type: 'text', value: 'An error occurred while processing your request.' });
        stream.end();
      }
    }
  });

  console.log('ABC Return ------------', response);
  return response;
}
