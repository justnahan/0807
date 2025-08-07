'use client'

import { Button } from '@/components/ui/button'
import { Facebook, MessageCircle, Share2, Instagram } from 'lucide-react'

interface SocialLinksProps {
  shareText: string
}

export default function SocialLinks({ shareText }: SocialLinksProps) {
  const encodedText = encodeURIComponent(shareText)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  const encodedUrl = encodeURIComponent(currentUrl)

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-4 h-4" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'LINE',
      icon: <MessageCircle className="w-4 h-4" />,
      url: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedText}`,
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      name: 'Instagram Story',
      icon: <Instagram className="w-4 h-4" />,
      // Instagram doesn't support direct sharing via URL, so we'll copy text instead
      onClick: () => {
        navigator.clipboard.writeText(shareText)
        alert('文字已複製！請貼到 Instagram 限時動態中分享')
      },
      color: 'bg-pink-600 hover:bg-pink-700',
    },
    {
      name: '其他平台',
      icon: <Share2 className="w-4 h-4" />,
      onClick: async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: '神明指引分享',
              text: shareText,
              url: currentUrl,
            })
          } catch {
            // Share cancelled or failed
          }
        } else {
          // Fallback: copy to clipboard
          navigator.clipboard.writeText(shareText)
          alert('文字已複製到剪貼板！')
        }
      },
      color: 'bg-gray-600 hover:bg-gray-700',
    },
  ]

  const handlePlatformShare = (platform: typeof socialPlatforms[0]) => {
    if (platform.onClick) {
      platform.onClick()
    } else if (platform.url) {
      window.open(platform.url, '_blank', 'width=600,height=400')
    }
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {socialPlatforms.map((platform) => (
          <Button
            key={platform.name}
            onClick={() => handlePlatformShare(platform)}
            className={`${platform.color} text-white justify-start`}
            size="sm"
            variant="default"
          >
            {platform.icon}
            <span className="ml-2 text-xs">{platform.name}</span>
          </Button>
        ))}
      </div>

      {/* 分享說明 */}
      <div className="text-xs text-gray-500 space-y-1">
        <p>• <strong>Facebook/LINE:</strong> 直接分享到社群平台</p>
        <p>• <strong>Instagram:</strong> 複製文字後手動貼到限時動態</p>
        <p>• <strong>其他平台:</strong> 使用系統原生分享功能</p>
      </div>
    </div>
  )
}