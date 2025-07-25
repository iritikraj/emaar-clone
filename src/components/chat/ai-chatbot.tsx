// components/ai-chatbot.tsx
'use client'
import { useState, useRef, useEffect } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { SendHorizonal, Sparkles } from 'lucide-react'
import { ChatSuggestions } from './chat-suggestions'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your Emaar AI assistant. I can help you with our luxury properties in Dubai. How can I assist you today?"
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          // Add any real estate specific context here
          context: {
            company: 'Emaar',
            service: 'luxury real estate',
            locations: ['Downtown Dubai', 'Palm Jumeirah', 'Dubai Hills'],
            specialties: ['high-end apartments', 'luxury villas', 'penthouse']
          }
        })
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch (error) {
      console.error(error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Sorry, I'm having trouble connecting. Please try again later."
      }])
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-md h-[500px] flex flex-col border border-gray-200 dark:border-gray-700">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <Avatar className="bg-primary/10 text-primary">
            <AvatarFallback>
              <Sparkles className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <CardTitle>Emaar AI Assistant</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">

        {messages.length <= 1 && (
          <ChatSuggestions onSelect={(question) => {
            setInput(question);
            // Optional: auto-submit the selected question
            handleSubmit({ preventDefault: () => { } } as React.FormEvent)
          }} />
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user'
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground'
              }`}>
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-secondary text-secondary-foreground rounded-lg p-3 max-w-[80%]">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100" />
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about properties, pricing..."
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            <SendHorizonal className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </Card>
  )
}