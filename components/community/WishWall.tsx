'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { 
  Search, 
  Plus, 
  Sparkles
} from 'lucide-react'
import { Wish } from '@/lib/supabase'
import WishCard from './WishCard'
import ShareModal from '../share/ShareModal'
import CommunityStats from './CommunityStats'

// 神明選項
const deities = [
  { id: 'yue_lao', name: '月老司機', emoji: '💕' },
  { id: 'wen_chang', name: '文昌老師', emoji: '📚' },
  { id: 'guan_yin', name: '觀音媽咪', emoji: '🤲' },
  { id: 'guan_gong', name: '關老大', emoji: '⚔️' },
  { id: 'ma_zu', name: '媽祖姐姐', emoji: '🌊' },
  { id: 'cai_shen', name: '財神老闆', emoji: '💰' },
]

interface WishWallProps {
  initialWishes?: Wish[]
  showCreateForm?: boolean
}

export default function WishWall({ initialWishes = [], showCreateForm = true }: WishWallProps) {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes)
  const [loading] = useState(false)
  const [showCreateWish, setShowCreateWish] = useState(false)
  const [shareModalWish, setShareModalWish] = useState<Wish | null>(null)
  
  // 篩選狀態
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDeity, setSelectedDeity] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('newest')
  
  // 新增許願表單
  const [newWish, setNewWish] = useState({
    deity_id: '',
    wish_content: '',
    is_anonymous: true
  })

  // 模擬數據（在實際應用中應該從 API 獲取）
  useEffect(() => {
    if (initialWishes.length === 0) {
      loadMockWishes()
    }
  }, [initialWishes.length])

  const loadMockWishes = () => {
    const mockWishes: Wish[] = [
      {
        id: '1',
        user_id: null,
        deity_id: 'yue_lao',
        deity_name: '月老司機',
        deity_emoji: '💕',
        wish_content: '希望能遇到真心相愛的人，建立美好的感情關係。願月老牽線，讓我找到命中注定的那個人。',
        is_anonymous: true,
        status: 'active',
        created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        likes_count: 23,
        comments_count: 5,
        is_fulfilled: false
      },
      {
        id: '2',
        user_id: null,
        deity_id: 'wen_chang',
        deity_name: '文昌老師',
        deity_emoji: '📚',
        wish_content: '即將面臨重要考試，希望文昌帝君保佑我能考試順利，發揮最好的實力。',
        is_anonymous: false,
        status: 'fulfilled',
        created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        likes_count: 45,
        comments_count: 12,
        is_fulfilled: true,
        fulfillment_story: '感謝文昌帝君！考試真的順利通過了，比預期的成績還要好！心懷感激 🙏'
      },
      {
        id: '3',
        user_id: null,
        deity_id: 'cai_shen',
        deity_name: '財神老闆',
        deity_emoji: '💰',
        wish_content: '希望事業能有所突破，投資理財也能獲得穩定收益，讓家人過上更好的生活。',
        is_anonymous: true,
        status: 'active',
        created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        likes_count: 18,
        comments_count: 3,
        is_fulfilled: false
      }
    ]
    setWishes(mockWishes)
  }

  // 篩選和排序邏輯
  const filteredWishes = wishes
    .filter(wish => {
      if (searchQuery && !wish.wish_content.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }
      if (selectedDeity !== 'all' && wish.deity_id !== selectedDeity) {
        return false
      }
      if (statusFilter !== 'all' && wish.status !== statusFilter) {
        return false
      }
      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        case 'oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        case 'most_liked':
          return b.likes_count - a.likes_count
        case 'most_comments':
          return b.comments_count - a.comments_count
        default:
          return 0
      }
    })

  const handleCreateWish = () => {
    if (!newWish.deity_id || !newWish.wish_content.trim()) return

    const deity = deities.find(d => d.id === newWish.deity_id)
    if (!deity) return

    const wish: Wish = {
      id: Date.now().toString(),
      user_id: newWish.is_anonymous ? null : 'current_user',
      deity_id: newWish.deity_id,
      deity_name: deity.name,
      deity_emoji: deity.emoji,
      wish_content: newWish.wish_content,
      is_anonymous: newWish.is_anonymous,
      status: 'active',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      likes_count: 0,
      comments_count: 0,
      is_fulfilled: false
    }

    setWishes(prev => [wish, ...prev])
    setNewWish({
      deity_id: '',
      wish_content: '',
      is_anonymous: true
    })
    setShowCreateWish(false)
  }

  const handlePraySupport = (wishId: string) => {
    setWishes(prev => prev.map(wish => 
      wish.id === wishId 
        ? { ...wish, likes_count: wish.likes_count + 1 }
        : wish
    ))
  }

  const handleShareWish = (wish: Wish) => {
    // 轉換為分享格式（這裡簡化處理）
    const shareData = {
      id: wish.id,
      deity: wish.deity_name,
      deityEmoji: wish.deity_emoji,
      question: `向${wish.deity_name}許願`,
      lotteryText: wish.wish_content,
      interpretation: wish.is_fulfilled ? wish.fulfillment_story || '願望已實現' : '許願中，請為我祈福',
      date: wish.created_at,
      advice: '心誠則靈，有求必應'
    }
    
    // 這裡可以打開分享對話框
    // TODO: Implement share functionality
    void shareData
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* 頁面標題 */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🏮 許願牆 🏮
        </h1>
        <p className="text-gray-600">
          與信眾一同分享心願，互相祈福支持
        </p>
      </div>

      {/* 社群統計 */}
      <CommunityStats />

      {/* 新增許願按鈕 */}
      {showCreateForm && (
        <div className="text-center">
          <Button 
            onClick={() => setShowCreateWish(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3"
            size="lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            發表新許願
          </Button>
        </div>
      )}

      {/* 新增許願表單 */}
      {showCreateWish && (
        <Card className="border-2 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-red-600" />
              向神明許下心願
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* 選擇神明 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">
                選擇要許願的神明
              </Label>
              <Select
                value={newWish.deity_id}
                onValueChange={(value) => setNewWish(prev => ({ ...prev, deity_id: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="請選擇神明..." />
                </SelectTrigger>
                <SelectContent>
                  {deities.map(deity => (
                    <SelectItem key={deity.id} value={deity.id}>
                      <span className="flex items-center gap-2">
                        <span>{deity.emoji}</span>
                        <span>{deity.name}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* 許願內容 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">
                您的心願
              </Label>
              <Textarea
                placeholder="請誠心寫下您的願望..."
                value={newWish.wish_content}
                onChange={(e) => setNewWish(prev => ({ ...prev, wish_content: e.target.value }))}
                className="min-h-[120px] resize-none"
                maxLength={500}
              />
              <div className="text-xs text-gray-500 text-right mt-1">
                {newWish.wish_content.length}/500
              </div>
            </div>

            {/* 匿名選項 */}
            <div className="flex items-center space-x-2">
              <Switch
                id="anonymous-wish"
                checked={newWish.is_anonymous}
                onCheckedChange={(checked) => setNewWish(prev => ({ ...prev, is_anonymous: checked }))}
              />
              <Label htmlFor="anonymous-wish" className="text-sm">
                匿名許願
              </Label>
            </div>

            {/* 提交按鈕 */}
            <div className="flex gap-2">
              <Button
                onClick={() => setShowCreateWish(false)}
                variant="outline"
                className="flex-1"
              >
                取消
              </Button>
              <Button
                onClick={handleCreateWish}
                disabled={!newWish.deity_id || !newWish.wish_content.trim()}
                className="flex-1"
              >
                發表許願
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 篩選和搜尋 */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* 搜尋 */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="搜尋許願內容..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* 神明篩選 */}
            <Select value={selectedDeity} onValueChange={setSelectedDeity}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">所有神明</SelectItem>
                {deities.map(deity => (
                  <SelectItem key={deity.id} value={deity.id}>
                    {deity.emoji} {deity.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* 狀態篩選 */}
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">所有狀態</SelectItem>
                <SelectItem value="active">許願中</SelectItem>
                <SelectItem value="fulfilled">已實現</SelectItem>
              </SelectContent>
            </Select>

            {/* 排序 */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">最新發布</SelectItem>
                <SelectItem value="oldest">最早發布</SelectItem>
                <SelectItem value="most_liked">最多祈福</SelectItem>
                <SelectItem value="most_comments">最多互動</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* 許願列表 */}
      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-8">
            <div className="text-gray-500">載入中...</div>
          </div>
        ) : filteredWishes.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-gray-500 space-y-2">
                <div className="text-4xl">🙏</div>
                <div>目前沒有符合條件的許願</div>
                <div className="text-sm">試試調整篩選條件或發表第一個許願吧！</div>
              </div>
            </CardContent>
          </Card>
        ) : (
          filteredWishes.map(wish => (
            <WishCard
              key={wish.id}
              wish={wish}
              onPraySupport={handlePraySupport}
              onShare={handleShareWish}
            />
          ))
        )}
      </div>

      {/* 分享彈窗 */}
      {shareModalWish && (
        <ShareModal
          isOpen={true}
          onClose={() => setShareModalWish(null)}
          lottery={{
            id: shareModalWish.id,
            deity: shareModalWish.deity_name,
            deityEmoji: shareModalWish.deity_emoji,
            question: `向${shareModalWish.deity_name}許願`,
            lotteryText: shareModalWish.wish_content,
            interpretation: shareModalWish.is_fulfilled ? shareModalWish.fulfillment_story || '願望已實現' : '許願中，請為我祈福',
            date: shareModalWish.created_at,
            advice: '心誠則靈，有求必應'
          }}
        />
      )}
    </div>
  )
}