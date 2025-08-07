import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '會員中心 - 線上寺廟',
  description: '管理您的個人資料、訂單記錄、收藏清單和帳戶設定。',
}

const mockUser = {
  name: '虔誠信徒',
  email: 'believer@temple.com',
  joinDate: '2024-12-01',
  level: '金牌會員',
  points: 1580,
  totalOrders: 8,
  favoriteDeity: '文昌老師',
  avatar: '🙏'
}

const mockOrders = [
  {
    id: 'ORDER-001',
    date: '2025-08-05',
    items: ['月老紅繩手鍊', '平安符'],
    total: 688,
    status: '已完成',
    tracking: 'TW123456789'
  },
  {
    id: 'ORDER-002', 
    date: '2025-08-03',
    items: ['文昌開智筆'],
    total: 488,
    status: '配送中',
    tracking: 'TW987654321'
  },
  {
    id: 'ORDER-003',
    date: '2025-08-01',
    items: ['招財貓', '財神香包'],
    total: 856,
    status: '處理中',
    tracking: '-'
  }
]

const mockFavorites = [
  { id: '1', name: '觀音平安符', price: 388, deity: '觀音媽咪', emoji: '🧿' },
  { id: '2', name: '財神招財貓', price: 688, deity: '財神老闆', emoji: '🐱' },
  { id: '3', name: '月老紅繩', price: 299, deity: '月老司機', emoji: '💝' }
]

export default function ProfilePage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case '已完成': return 'bg-green-100 text-green-800'
      case '配送中': return 'bg-blue-100 text-blue-800'
      case '處理中': return 'bg-yellow-100 text-yellow-800'
      case '已取消': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      {/* 頁面標題區 */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <Avatar className="w-20 h-20 text-4xl bg-white text-indigo-600">
              <AvatarFallback>{mockUser.avatar}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">👤 會員中心</h1>
              <p className="text-xl text-indigo-100">歡迎回來，{mockUser.name}</p>
              <div className="flex flex-col md:flex-row gap-2 mt-2">
                <Badge className="bg-yellow-500 text-yellow-900">{mockUser.level}</Badge>
                <span className="text-indigo-200">加入日期：{mockUser.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 快速統計 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-purple-600">{mockUser.points}</div>
              <p className="text-sm text-gray-600">會員積分</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">{mockUser.totalOrders}</div>
              <p className="text-sm text-gray-600">總訂單數</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">📚</div>
              <p className="text-sm text-gray-600">最愛神明</p>
              <p className="text-xs text-gray-500">{mockUser.favoriteDeity}</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-600">{mockFavorites.length}</div>
              <p className="text-sm text-gray-600">收藏商品</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">個人資料</TabsTrigger>
            <TabsTrigger value="orders">訂單管理</TabsTrigger>
            <TabsTrigger value="favorites">收藏清單</TabsTrigger>
            <TabsTrigger value="points">積分系統</TabsTrigger>
            <TabsTrigger value="settings">帳戶設定</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>📋 個人資料管理</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">姓名</label>
                    <Input value={mockUser.name} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">電子郵件</label>
                    <Input value={mockUser.email} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">電話號碼</label>
                    <Input placeholder="請輸入電話號碼" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">生日</label>
                    <Input type="date" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">地址</label>
                  <Input placeholder="請輸入完整地址" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">信仰偏好</label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-pink-50">💕 感情運勢</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">📚 學業事業</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-green-50">🌸 健康平安</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-yellow-50">💰 財運事業</Badge>
                  </div>
                </div>

                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  💾 保存變更
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="mt-6">
            <div className="space-y-4">
              {mockOrders.map((order) => (
                <Card key={order.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">訂單 #{order.id}</CardTitle>
                        <p className="text-sm text-gray-600">下單日期：{order.date}</p>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-1">商品清單：</p>
                        <p className="text-gray-700">{order.items.join('、')}</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-600">
                            {order.tracking !== '-' && `物流單號：${order.tracking}`}
                          </p>
                        </div>
                        <p className="font-bold text-lg text-amber-600">
                          NT$ {order.total}
                        </p>
                      </div>

                      <div className="flex justify-end space-x-2 pt-2 border-t">
                        {order.status === '配送中' && (
                          <Button size="sm" variant="outline">
                            📦 追蹤物流
                          </Button>
                        )}
                        {order.status === '已完成' && (
                          <Button size="sm" variant="outline">
                            ⭐ 商品評價
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          🔄 再次購買
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>❤️ 我的收藏清單</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mockFavorites.map((item) => (
                    <Card key={item.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="text-center">
                          <div className="text-4xl mb-2">{item.emoji}</div>
                          <CardTitle className="text-sm">{item.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 text-center">
                        <Badge variant="secondary" className="mb-2">{item.deity}</Badge>
                        <p className="font-bold text-lg text-amber-600 mb-3">
                          NT$ {item.price}
                        </p>
                        <div className="space-y-2">
                          <Button size="sm" className="w-full">
                            🛒 加入購物車
                          </Button>
                          <Button size="sm" variant="outline" className="w-full text-red-600 hover:bg-red-50">
                            💔 移除收藏
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="points" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>💎 積分總覽</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      {mockUser.points}
                    </div>
                    <p className="text-gray-600">可用積分</p>
                    <Badge className="mt-2 bg-yellow-500 text-yellow-900">
                      {mockUser.level}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>升級至鑽石會員還需要：</span>
                      <span className="font-medium">420 積分</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '79%'}}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>🎁 積分兌換</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">🧧 新年紅包</p>
                        <p className="text-sm text-gray-600">500 積分</p>
                      </div>
                      <Button size="sm">兌換</Button>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">🎫 問事免費券</p>
                        <p className="text-sm text-gray-600">300 積分</p>
                      </div>
                      <Button size="sm">兌換</Button>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">📦 免運券</p>
                        <p className="text-sm text-gray-600">200 積分</p>
                      </div>
                      <Button size="sm">兌換</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>🔔 通知設定</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">電子郵件通知</p>
                      <p className="text-sm text-gray-600">訂單狀態、活動通知</p>
                    </div>
                    <Button size="sm" variant="outline">✅ 已開啟</Button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">推送通知</p>
                      <p className="text-sm text-gray-600">即時訊息推送</p>
                    </div>
                    <Button size="sm" variant="outline">❌ 已關閉</Button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">行銷訊息</p>
                      <p className="text-sm text-gray-600">優惠活動通知</p>
                    </div>
                    <Button size="sm" variant="outline">✅ 已開啟</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>🔒 帳戶安全</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    🔑 修改密碼
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    📱 綁定手機號碼
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    👁️ 查看登錄記錄
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-600 hover:bg-red-50">
                    🚪 登出帳戶
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}