// components/chat-suggestions.tsx
'use client'

import { Button } from "../ui/button"


const SUGGESTED_QUESTIONS = [
  "What luxury apartments are available in Downtown Dubai?",
  "Show me 3-bedroom villas in Palm Jumeirah",
  "What amenities come with Emaar properties?",
  "What's the price range for penthouses in Dubai Hills?"
]

export function ChatSuggestions({ onSelect }: { onSelect: (question: string) => void }) {
  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {SUGGESTED_QUESTIONS.map((question) => (
        <Button
          key={question}
          variant="outline"
          className="text-xs h-auto py-2 whitespace-normal text-left"
          onClick={() => onSelect(question)}
        >
          {question}
        </Button>
      ))}
    </div>
  )
}