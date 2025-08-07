'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { 
  Users, 
  Heart, 
  Sparkles, 
  TrendingUp,
  Award,
  Calendar,
  Target,
  Crown
} from 'lucide-react'
import { CommunityStats as CommunityStatsType } from '@/lib/supabase'

interface CommunityStatsProps {
  stats?: CommunityStatsType
  showDetailed?: boolean
}

export default function CommunityStats({ 
  stats,
  showDetailed = true 
}: CommunityStatsProps) {
  const [currentStats, setCurrentStats] = useState<CommunityStatsType | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // 模擬統計數據
    const mockStats: CommunityStatsType = {
    total_wishes: 1247,
    fulfilled_wishes: 342,
    total_prayers: 5689,
    active_users: 823,
    popular_deities: [
      { deity_id: 'yue_lao', deity_name: '月老司機', deity_emoji: '💕', wish_count: 356 },
      { deity_id: 'wen_chang', deity_name: '文昌老師', deity_emoji: '📚', wish_count: 298 },
      { deity_id: 'guan_yin', deity_name: '觀音媽咪', deity_emoji: '🤲', wish_count: 234 },
      { deity_id: 'cai_shen', deity_name: '財神老闆', deity_emoji: '💰', wish_count: 189 },
      { deity_id: 'ma_zu', deity_name: '媽祖姐姐', deity_emoji: '🌊', wish_count: 112 },
      { deity_id: 'guan_gong', deity_name: '關老大', deity_emoji: '⚔️', wish_count: 58 }
    ]
    }
    
    if (stats) {
      setCurrentStats(stats)
    } else {
      // 模擬 API 調用
      setLoading(true)
      setTimeout(() => {
        setCurrentStats(mockStats)
        setLoading(false)
      }, 1000)
    }
  }, [stats])


  if (loading || !currentStats) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="space-y-2">
                  <div className="h-8 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const fulfillmentRate = Math.round((currentStats.fulfilled_wishes / currentStats.total_wishes) * 100)
  const avgPrayersPerWish = Math.round(currentStats.total_prayers / currentStats.total_wishes)

  return (
    <div className="space-y-6">
      {/* 主要統計數據 */}
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-red-600" />
            廟宇社群統計
            <Sparkles className="h-5 w-5 text-red-600" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {/* 總許願數 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-red-600">
                {currentStats.total_wishes.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                <Target className="h-4 w-4" />
                總許願數
              </div>
            </div>

            {/* 實現願望數 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">
                {currentStats.fulfilled_wishes.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                <Award className="h-4 w-4" />
                已實現
              </div>
            </div>

            {/* 祈福次數 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">
                {currentStats.total_prayers.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                <Heart className="h-4 w-4" />
                祈福次數
              </div>
            </div>

            {/* 活躍用戶 */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">
                {currentStats.active_users.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                <Users className="h-4 w-4" />
                活躍信眾
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {showDetailed && (
        <>
          {/* 詳細統計 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 許願實現率 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  許願實現率
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-green-600">
                    {fulfillmentRate}%
                  </div>
                  <Progress value={fulfillmentRate} className="h-2" />
                  <div className="text-sm text-gray-600">
                    已有 {currentStats.fulfilled_wishes} 個願望成功實現
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 社群活躍度 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-600" />
                  社群互動
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-pink-600">
                    {avgPrayersPerWish}
                  </div>
                  <div className="text-sm text-gray-600">
                    每個許願平均獲得 {avgPrayersPerWish} 次祈福支持
                  </div>
                  <div className="text-xs text-gray-500">
                    社群氛圍非常溫馨，信眾們互相扶持 💕
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 熱門神明排行榜 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-yellow-600" />
                熱門神明排行榜
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentStats.popular_deities.map((deity, index) => {
                  const percentage = (deity.wish_count / currentStats.total_wishes) * 100
                  return (
                    <div key={deity.deity_id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {/* 排名 */}
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            index === 0 ? 'bg-yellow-100 text-yellow-800' :
                            index === 1 ? 'bg-gray-100 text-gray-800' :
                            index === 2 ? 'bg-orange-100 text-orange-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {index + 1}
                          </div>
                          
                          {/* 神明資訊 */}
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{deity.deity_emoji}</span>
                            <span className="font-medium">{deity.deity_name}</span>
                          </div>
                        </div>

                        {/* 許願數量 */}
                        <div className="text-right">
                          <div className="font-semibold">{deity.wish_count}</div>
                          <div className="text-xs text-gray-500">
                            {percentage.toFixed(1)}%
                          </div>
                        </div>
                      </div>

                      {/* 進度條 */}
                      <Progress 
                        value={percentage} 
                        className="h-1.5"
                      />
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* 溫馨提示 */}
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-yellow-800">
                  <p className="font-medium mb-1">💫 社群小提醒</p>
                  <p>
                    我們的社群正在茁壯成長！每天都有新的信眾加入，分享他們的心願和感謝。
                    無論您的願望大小，都歡迎在這裡分享，讓我們一起為彼此祈福 🙏
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}