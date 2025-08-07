'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Clock,
  Check,
  Sparkles,
  Eye,
  EyeOff
} from 'lucide-react'
import { Wish } from '@/lib/supabase'
import PraySupport from './PraySupport'

interface WishCardProps {
  wish: Wish
  onPraySupport: (wishId: string) => void
  onShare: (wish: Wish) => void
  showActions?: boolean
}

export default function WishCard({ 
  wish, 
  onPraySupport, 
  onShare, 
  showActions = true 
}: WishCardProps) {
  const [showPrayModal, setShowPrayModal] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(wish.likes_count)

  const formatTimeAgo = (dateString: string) => {
    const now = new Date()
    const date = new Date(dateString)
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 1) return '剛剛'
    if (diffInMinutes < 60) return `${diffInMinutes}分鐘前`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}小時前`
    return `${Math.floor(diffInMinutes / 1440)}天前`
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1)
    // 這裡應該調用 API 來更新後端數據
  }

  const handlePraySupport = () => {
    setShowPrayModal(true)
  }

  const getStatusBadge = () => {
    switch (wish.status) {
      case 'fulfilled':
        return (
          <Badge className="bg-green-100 text-green-800 border-green-200">
            <Check className="w-3 h-3 mr-1" />
            已實現
          </Badge>
        )
      case 'active':
        return (
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
            <Sparkles className="w-3 h-3 mr-1" />
            許願中
          </Badge>
        )
      case 'archived':
        return (
          <Badge variant="secondary">
            已封存
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <>
      <Card className="mb-4 hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            {/* 用戶資訊 */}
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600">
                  {wish.is_anonymous ? (
                    <EyeOff className="h-5 w-5 text-white" />
                  ) : (
                    <Eye className="h-5 w-5 text-white" />
                  )}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm">
                  {wish.is_anonymous ? '匿名信眾' : '虔誠信眾'}
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {formatTimeAgo(wish.created_at)}
                </div>
              </div>
            </div>
            
            {/* 狀態標籤 */}
            {getStatusBadge()}
          </div>
        </CardHeader>

        <CardContent>
          {/* 神明資訊 */}
          <div className="flex items-center gap-2 mb-3 p-2 bg-red-50 rounded-lg border border-red-100">
            <span className="text-lg">{wish.deity_emoji}</span>
            <span className="text-sm font-medium text-red-800">向 {wish.deity_name} 許願</span>
          </div>

          {/* 許願內容 */}
          <div className="mb-4">
            <p className="text-gray-800 leading-relaxed">
              {wish.wish_content}
            </p>
          </div>

          {/* 實現故事（如果有） */}
          {wish.is_fulfilled && wish.fulfillment_story && (
            <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-1 mb-2">
                <Sparkles className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">感謝回饋</span>
              </div>
              <p className="text-sm text-green-700 leading-relaxed">
                {wish.fulfillment_story}
              </p>
            </div>
          )}

          {/* 互動按鈕 */}
          {showActions && (
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center gap-4">
                {/* 祈福加油 */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLike}
                  className={`gap-1 ${isLiked ? 'text-red-600' : 'text-gray-600'}`}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span className="text-xs">{likesCount}</span>
                </Button>

                {/* 我也在祈禱 */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePraySupport}
                  className="gap-1 text-blue-600"
                >
                  🙏
                  <span className="text-xs">我也祈禱</span>
                </Button>

                {/* 留言 */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 text-gray-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-xs">{wish.comments_count}</span>
                </Button>
              </div>

              {/* 分享按鈕 */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onShare(wish)}
                className="gap-1 text-gray-600"
              >
                <Share2 className="h-4 w-4" />
                <span className="text-xs">分享</span>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 祈福支持彈窗 */}
      <PraySupport
        isOpen={showPrayModal}
        onClose={() => setShowPrayModal(false)}
        wish={wish}
        onSupport={() => {
          onPraySupport(wish.id)
          setShowPrayModal(false)
        }}
      />
    </>
  )
}