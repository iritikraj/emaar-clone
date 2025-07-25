// components/site-footer.tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-6 py-6 md:py-4 gap-4">

        <p className="text-sm text-muted-foreground flex items-center">
          Crafted with <Heart className="inline h-4 w-4 text-rose-500 mx-1" /> by Ritik
        </p>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/privacy">
              <span className="text-xs font-light">Privacy</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/terms">
              <span className="text-xs font-light">Terms</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <span className="text-xs font-light">GitHub</span>
            </Link>
          </Button>
        </div>

      </div>
    </footer>
  )
}
