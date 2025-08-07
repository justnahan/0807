'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { 
  Sparkles, 
  Heart, 
  Calendar, 
  Award,
  Gift,
  Star,
  MessageSquareHeart,
  TrendingUp
} from 'lucide-react'

interface ThankfulStory {
  id: string
  wish_id: string
  user_id?: string | null
  deity_name: string
  deity_emoji: string
  original_wish: string
  fulfillment_story: string
  fulfillment_date: string
  is_anonymous: boolean
  likes_count: number
  inspiring_others: number
  featured: boolean
}

interface ThankfulStoriesProps {
  stories?: ThankfulStory[]
  showFeatured?: boolean
}

export default function ThankfulStories({ 
  stories = [], 
  showFeatured = false 
}: ThankfulStoriesProps) {
  const [selectedStory, setSelectedStory] = useState<ThankfulStory | null>(null)
  const [likedStories, setLikedStories] = useState<Set<string>>(new Set())

  // 模擬感謝故事數據
  const mockStories: ThankfulStory[] = [
    {
      id: '1',
      wish_id: 'wish_1',
      user_id: null,
      deity_name: '文昌老師',
      deity_emoji: '📚',
      original_wish: '希望文昌帝君保佑我能考試順利，發揮最好的實力。',
      fulfillment_story: '感謝文昌帝君！經過三個月的努力，終於通過了證照考試，而且成績比預期的還要好！現在已經獲得心儀公司的工作機會。許願的那天我就開始每天認真讀書，感覺真的有神明在保佑，讓我在考試當天思路特別清晰。真的很感恩！🙏',
      fulfillment_date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      is_anonymous: true,
      likes_count: 156,
      inspiring_others: 23,
      featured: true
    },
    {
      id: '2',
      wish_id: 'wish_2', 
      user_id: null,
      deity_name: '月老司機',
      deity_emoji: '💕',
      original_wish: '希望能遇到真心相愛的人，建立美好的感情關係。',
      fulfillment_story: '真的太神奇了！許願後不到一個月，在朋友的聚會上遇到了現在的男友。我們相處得很融洽，他很體貼也很理解我。現在交往半年了，感情越來越穩定。月老真的很靈驗，感謝這份美好的緣分！💕',
      fulfillment_date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      is_anonymous: false,
      likes_count: 234,
      inspiring_others: 45,
      featured: true
    },
    {
      id: '3',
      wish_id: 'wish_3',
      user_id: null,
      deity_name: '財神老闆',
      deity_emoji: '💰',
      original_wish: '希望事業能有所突破，讓家人過上更好的生活。',
      fulfillment_story: '感謝財神爺！許願後開始積極尋找新的投資機會，最近投資的項目獲得不錯的回報。同時工作上也得到了升職加薪的機會，收入提升了30%。現在終於能帶家人出國旅遊，也為孩子的教育基金存了一筆錢。心懷感激！',
      fulfillment_date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
      is_anonymous: true,
      likes_count: 89,
      inspiring_others: 12,
      featured: false
    },
    {
      id: '4',
      wish_id: 'wish_4',
      user_id: null,
      deity_name: '觀音媽咪',
      deity_emoji: '🤲',
      original_wish: '希望家人身體健康，度過難關。',
      fulfillment_story: '觀音菩薩真的很慈悲！爸爸的身體檢查結果比預期好很多，醫生說恢復得很不錯。媽媽的心情也變好了，全家人又重新充滿希望。這段時間我們更珍惜相處的時光，家庭關係也更和睦了。謝謝觀音媽咪的護佑！🙏',
      fulfillment_date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      is_anonymous: true,
      likes_count: 178,
      inspiring_others: 31,
      featured: true
    }
  ]

  const displayStories = stories.length > 0 ? stories : mockStories
  const filteredStories = showFeatured ? displayStories.filter(story => story.featured) : displayStories

  const handleLike = (storyId: string) => {
    setLikedStories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(storyId)) {
        newSet.delete(storyId)
      } else {
        newSet.add(storyId)
      }
      return newSet
    })
  }

  const formatTimeAgo = (dateString: string) => {
    const now = new Date()
    const date = new Date(dateString)
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
    
    if (diffInDays === 0) return '今天'
    if (diffInDays === 1) return '昨天'
    if (diffInDays < 7) return `${diffInDays}天前`
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}週前`
    return `${Math.floor(diffInDays / 30)}個月前`
  }

  return (
    <div className="space-y-6">
      {/* 標題區域 */}
      {!showFeatured && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-yellow-500" />
            感謝故事分享
            <Sparkles className="h-6 w-6 text-yellow-500" />
          </h2>
          <p className="text-gray-600">
            信眾們分享願望實現的喜悅時刻
          </p>
        </div>
      )}

      {/* 精選故事橫幅（僅在精選模式下顯示） */}
      {showFeatured && (
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-5 w-5 text-yellow-600" />
              <span className="font-semibold text-yellow-800">本週精選感謝故事</span>
            </div>
            <p className="text-sm text-yellow-700">
              這些感謝故事特別鼓舞人心，為其他信眾帶來希望與力量
            </p>
          </CardContent>
        </Card>
      )}

      {/* 故事列表 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredStories.map((story) => (
          <Card 
            key={story.id} 
            className={`hover:shadow-lg transition-all duration-200 ${
              story.featured ? 'ring-2 ring-yellow-200 bg-yellow-50/30' : ''
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                {/* 用戶資訊 */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-gradient-to-br from-green-400 to-green-600">
                      <Gift className="h-5 w-5 text-white" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">
                      {story.is_anonymous ? '感恩信眾' : '虔誠信眾'}
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatTimeAgo(story.fulfillment_date)}
                    </div>
                  </div>
                </div>

                {/* 精選標籤 */}
                {story.featured && (
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                    <Star className="w-3 h-3 mr-1" />
                    精選
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent>
              {/* 神明資訊 */}
              <div className="flex items-center gap-2 mb-3 p-2 bg-green-50 rounded-lg border border-green-100">
                <span className="text-lg">{story.deity_emoji}</span>
                <span className="text-sm font-medium text-green-800">
                  感謝 {story.deity_name} 的庇佑
                </span>
              </div>

              {/* 原始許願 */}
              <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">原本的心願：</div>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {story.original_wish}
                </p>
              </div>

              {/* 感謝故事 */}
              <div className="mb-4">
                <div className="text-xs text-green-600 mb-1 flex items-center gap-1">
                  <MessageSquareHeart className="h-3 w-3" />
                  感謝分享：
                </div>
                <p className="text-sm text-gray-800 leading-relaxed line-clamp-4">
                  {story.fulfillment_story}
                </p>
              </div>

              {/* 互動統計 */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  {/* 按讚 */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(story.id)}
                    className={`gap-1 ${
                      likedStories.has(story.id) ? 'text-red-600' : 'text-gray-600'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${likedStories.has(story.id) ? 'fill-current' : ''}`} />
                    <span className="text-xs">{story.likes_count}</span>
                  </Button>

                  {/* 啟發他人 */}
                  <div className="flex items-center gap-1 text-gray-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-xs">啟發 {story.inspiring_others} 人</span>
                  </div>
                </div>

                {/* 查看詳情 */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedStory(story)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <span className="text-xs">查看完整故事</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 空狀態 */}
      {filteredStories.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <div className="text-gray-500 space-y-2">
              <div className="text-4xl">✨</div>
              <div>目前還沒有感謝故事</div>
              <div className="text-sm">當願望實現時，歡迎回來分享您的喜悅！</div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 故事詳情對話框 */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-lg">{selectedStory.deity_emoji}</span>
                <span>感謝 {selectedStory.deity_name} 的庇佑</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm text-gray-600 mb-2">原本的心願：</h4>
                <p className="text-sm text-gray-800 bg-gray-50 p-3 rounded-lg">
                  {selectedStory.original_wish}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-sm text-green-600 mb-2">感謝故事：</h4>
                <p className="text-sm text-gray-800 leading-relaxed">
                  {selectedStory.fulfillment_story}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="text-xs text-gray-500">
                  分享於 {formatTimeAgo(selectedStory.fulfillment_date)}
                </div>
                <Button onClick={() => setSelectedStory(null)}>
                  關閉
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}