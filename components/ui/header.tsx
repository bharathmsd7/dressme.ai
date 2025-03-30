import { Search } from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function Header() {
    const router = useRouter()
  return (
    <>
      <div className="w-full bg-purple-100 py-2 text-center text-sm">
        EVERY OUTFIT HAS A LOVE STORY – LETS CREATE YOURS TOGETHER!
      </div>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">DressMe.ai</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-purple-600 transition-colors">Home</Link>
              <Link href="/collections" className="text-sm font-medium hover:text-purple-600 transition-colors">Collections</Link>
              <Link href="/new" className="text-sm font-medium hover:text-purple-600 transition-colors">New</Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pl-8 rounded-full bg-muted"
              />
            </div>
            <Button 
              variant="secondary" 
              className="bg-purple-100 hover:bg-purple-200 text-purple-900"
              onClick={() => router.push('/style-guide')}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Style me
            </Button>
            <Avatar>
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
    </>
  )
}