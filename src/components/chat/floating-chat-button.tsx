// components/floating-chat-button.tsx
'use client'
import { Button } from '@/components/ui/button'
import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { AIChatbot } from './ai-chatbot'

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="relative">
          <Button
            onClick={() => setIsOpen(false)}
            className="absolute -top-3 -right-3 rounded-full w-8 h-8 p-0"
            variant="outline"
          >
            <X className="h-4 w-4" />
          </Button>
          <AIChatbot />
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 p-0 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}