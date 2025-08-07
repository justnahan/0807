import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '願望紀錄 - 線上寺廟',
  description: '追蹤您的許願歷史、籤詩收藏和願望實現進度。記錄每一次的神明指引。',
}

const mockWishes = [
  {
    id: '1',
    date: '2025-08-05',
    deity: '月老司機',
    deityEmoji: '💕',
    question: '什麼時候能遇到真愛？',
    fortune: '第十八籤：山重水複疑無路，柳暗花明又一村',
    status: '進行中',
    category: '感情',
    diceResult: '聖筊'
  },
  {
    id: '2',
    date: '2025-08-03',
    deity: '文昌老師', 
    deityEmoji: '📚',
    question: '這次考試能順利通過嗎？',
    fortune: '第三十五籤：一帆風順正當時，萬事亨通不用疑',
    status: '已實現',
    category: '學業',
    diceResult: '聖筊',
    gratitude: '考試真的通過了！感謝文昌老師的指引 🙏'
  },
  {
    id: '3',
    date: '2025-08-01',
    deity: '財神老闆',
    deityEmoji: '💰',
    question: '投資股票的時機對嗎？',
    fortune: '第七籤：守得雲開見月明，撥開迷霧現光明',
    status: '許願中',
    category: '財運',
    diceResult: '笑筊'
  }
]

const mockStats = {
  totalWishes: 15,
  realizedWishes: 8,
  favoriteDeity: '文昌老師',
  successRate: 53,
  totalConsultations: 28
}

export default function WishesPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case '已實現': return 'bg-green-100 text-green-800'
      case '進行中': return 'bg-blue-100 text-blue-800' 
      case '許願中': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getDiceColor = (result: string) => {
    switch (result) {
      case '聖筊': return 'text-green-600'
      case '笑筊': return 'text-yellow-600'
      case '陰筊': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      {/* 頁面標題區 */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            📋 願望紀錄
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            追蹤您的許願歷史，記錄每一次神明的指引與祝福
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 統計概覽 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">{mockStats.totalWishes}</div>
              <p className="text-sm text-gray-600">總許願次數</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">{mockStats.realizedWishes}</div>
              <p className="text-sm text-gray-600">已實現願望</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-purple-600">{mockStats.successRate}%</div>
              <p className="text-sm text-gray-600">實現成功率</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-600">{mockStats.totalConsultations}</div>
              <p className="text-sm text-gray-600">問事總次數</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-lg font-bold text-red-600">📚</div>
              <p className="text-sm text-gray-600">最常諮詢</p>
              <p className="text-xs text-gray-500">{mockStats.favoriteDeity}</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="history">許願歷史</TabsTrigger>
            <TabsTrigger value="collection">籤詩收藏</TabsTrigger>
            <TabsTrigger value="reminders">提醒設定</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="mt-6">
            <div className="space-y-4">
              {/* 篩選選項 */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline" className="cursor-pointer hover:bg-gray-50">
                  全部狀態
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
                  已實現
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
                  進行中
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-yellow-50">
                  許願中
                </Badge>
              </div>

              {/* 願望列表 */}
              {mockWishes.map((wish) => (
                <Card key={wish.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{wish.deityEmoji}</span>
                        <div>
                          <CardTitle className="text-lg">{wish.deity}</CardTitle>
                          <p className="text-sm text-gray-600">{wish.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(wish.status)}>
                          {wish.status}
                        </Badge>
                        <Badge variant="outline" className={getDiceColor(wish.diceResult)}>
                          {wish.diceResult}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">您的問題：</p>
                        <p className="font-medium">{wish.question}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-600 mb-1">獲得籤詩：</p>
                        <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                          <p className="text-sm font-medium text-gray-800">{wish.fortune}</p>
                        </div>
                      </div>

                      {wish.gratitude && (
                        <div>
                          <p className="text-sm text-gray-600 mb-1">感謝回饋：</p>
                          <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
                            <p className="text-sm text-green-800">{wish.gratitude}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                        <span className="text-xs text-gray-500">分類：{wish.category}</span>
                        <div className="flex space-x-2">
                          {wish.status !== '已實現' && (
                            <Button size="sm" variant="outline">
                              📝 更新狀態
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            🔄 重新問事
                          </Button>
                          <Button size="sm" variant="outline">
                            📤 分享
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="collection" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>📜 我的籤詩收藏庫</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {mockWishes.filter(w => w.diceResult === '聖筊').map((wish) => (
                    <Card key={`collection-${wish.id}`} className="border-2 border-yellow-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <span className="text-lg">{wish.deityEmoji} {wish.deity}</span>
                          <Badge variant="secondary">{wish.date}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg">
                          <p className="font-medium text-gray-800 mb-2">{wish.fortune}</p>
                          <p className="text-sm text-gray-600">問題：{wish.question}</p>
                        </div>
                        <div className="flex justify-between mt-3">
                          <Button size="sm" variant="outline">
                            📋 複製籤文
                          </Button>
                          <Button size="sm" variant="outline">
                            📤 製作分享卡
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reminders" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>⏰ 定期提醒設定</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">每週運勢提醒</p>
                      <p className="text-sm text-gray-600">每週一早上 9:00</p>
                    </div>
                    <Button size="sm" variant="outline">
                      ✅ 已開啟
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">願望進度檢查</p>
                      <p className="text-sm text-gray-600">每月 1 日提醒</p>
                    </div>
                    <Button size="sm" variant="outline">
                      ❌ 已關閉
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">重要日期提醒</p>
                      <p className="text-sm text-gray-600">考試、面試等重要日期</p>
                    </div>
                    <Button size="sm" variant="outline">
                      ✅ 已開啟
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>📅 重要日期管理</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <p className="font-medium text-blue-800">📚 期末考試</p>
                    <p className="text-sm text-blue-600">2025-08-15 (8天後)</p>
                    <p className="text-xs text-blue-500">文昌老師祝福中</p>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <p className="font-medium text-green-800">💼 面試機會</p>
                    <p className="text-sm text-green-600">2025-08-20 (13天後)</p>
                    <p className="text-xs text-green-500">關老大加持中</p>
                  </div>

                  <Button className="w-full" variant="outline">
                    ➕ 新增重要日期
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* 快速操作區 */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            🌟 繼續您的信仰之旅
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/deities">
                🔮 再次問事
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/shop">
                🛒 購買祈福商品
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/community">
                💬 分享到社群
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}