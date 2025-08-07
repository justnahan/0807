'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navItems = [
  { href: '/', label: '廟宇首頁', emoji: '🏯' },
  { href: '/deities', label: '神明殿堂', emoji: '🔮' },
  { href: '/shop', label: '祈福商城', emoji: '🛒' },
  { href: '/wishes', label: '願望紀錄', emoji: '📋' },
  { href: '/profile', label: '會員中心', emoji: '👤' },
  { href: '/community', label: '廟宇社群', emoji: '💬' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-gradient-to-r from-red-900 to-red-800 text-white shadow-lg border-b-4 border-yellow-400">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
            <span className="text-yellow-400">🏯</span>
            <span>線上寺廟</span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className={cn(
                  "text-white hover:text-yellow-300 hover:bg-red-800/50",
                  pathname === item.href && "bg-yellow-400/20 text-yellow-300"
                )}
              >
                <Link href={item.href as any} className="flex items-center space-x-1">
                  <span>{item.emoji}</span>
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-red-800/50"
          >
            ☰
          </Button>
        </div>
      </div>
    </nav>
  )
}