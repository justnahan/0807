import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '廟宇首頁 - 線上寺廟',
  description: 'AI神明陪伴，現代信仰體驗。心誠則靈，有求必應的線上廟宇平台。',
}

const deities = [
  { 
    id: 'yuelao', 
    name: '月老司機', 
    specialty: '感情問題', 
    emoji: '💕', 
    status: '紅線活躍中',
    gradient: 'from-pink-100 via-pink-200 to-pink-400',
    borderColor: 'hover:border-pink-400 hover:shadow-pink-200/50',
    statusColor: 'bg-pink-100 text-pink-700'
  },
  { 
    id: 'wenchang', 
    name: '文昌老師', 
    specialty: '學業事業', 
    emoji: '📚', 
    status: '智慧加持中',
    gradient: 'from-blue-100 via-blue-200 to-blue-400',
    borderColor: 'hover:border-blue-400 hover:shadow-blue-200/50',
    statusColor: 'bg-blue-100 text-blue-700'
  },
  { 
    id: 'guanyin', 
    name: '觀音媽咪', 
    specialty: '健康平安', 
    emoji: '🌸', 
    status: '慈悲守護中',
    gradient: 'from-pink-50 via-pink-100 to-pink-200',
    borderColor: 'hover:border-pink-300 hover:shadow-pink-100/50',
    statusColor: 'bg-pink-50 text-pink-600'
  },
  { 
    id: 'guandi', 
    name: '關老大', 
    specialty: '正義決策', 
    emoji: '⚔️', 
    status: '正氣凜然中',
    gradient: 'from-red-100 via-red-300 to-red-500',
    borderColor: 'hover:border-red-400 hover:shadow-red-200/50',
    statusColor: 'bg-red-100 text-red-700'
  },
  { 
    id: 'mazu', 
    name: '媽祖姐姐', 
    specialty: '出行平安', 
    emoji: '⛵', 
    status: '海風護航中',
    gradient: 'from-cyan-100 via-teal-200 to-teal-400',
    borderColor: 'hover:border-teal-400 hover:shadow-teal-200/50',
    statusColor: 'bg-teal-100 text-teal-700'
  },
  { 
    id: 'caishen', 
    name: '財神老闆', 
    specialty: '財運事業', 
    emoji: '💰', 
    status: '金光閃閃中',
    gradient: 'from-yellow-100 via-yellow-300 to-orange-400',
    borderColor: 'hover:border-yellow-400 hover:shadow-yellow-200/50',
    statusColor: 'bg-yellow-100 text-yellow-700'
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      {/* 頂部橫幅區 */}
      <header className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              🏯 心誠則靈，有求必應
            </h1>
            <p className="text-xl md:text-2xl text-yellow-200">
              AI神明陪伴，現代信仰體驗
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold text-lg px-8 py-3 mt-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/deities">
                🔮 點燈問事
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* 今日靈感區 */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-yellow-400">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            📅 今日靈感 (2025年8月7日)
          </h2>
          <div className="text-center space-y-4">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border border-yellow-200">
              <p className="text-lg font-medium text-gray-700 mb-2">今日一籤</p>
              <p className="text-xl text-gray-800 mb-4">「山重水復疑無路，柳暗花明又一村」</p>
              <p className="text-gray-600">困境之中藏轉機，堅持前進必有光明</p>
              <Button variant="outline" size="sm" className="mt-4">
                查看詳細解釋
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              今日已為 <span className="font-bold text-red-600">168</span> 位用戶解惑
            </p>
          </div>
        </div>
      </section>

      {/* 神明大廳區 */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          🌟 神明大廳
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {deities.map((deity) => (
            <Card 
              key={deity.id}
              className={`bg-gradient-to-br ${deity.gradient} hover:shadow-xl transition-all duration-400 hover:scale-105 hover:-translate-y-2 cursor-pointer border-2 ${deity.borderColor} group relative overflow-hidden`}
            >
              {/* 光效 */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              
              <CardHeader className="text-center pb-2 relative z-10">
                <div className="text-4xl mb-2 group-hover:scale-110 group-hover:animate-pulse transition-all duration-400">{deity.emoji}</div>
                <CardTitle className="text-lg font-bold group-hover:text-gray-900">{deity.name}</CardTitle>
                <CardDescription className="group-hover:text-gray-700 font-medium">{deity.specialty}</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0 relative z-10">
                <p className={`text-sm font-bold px-3 py-1 rounded-full ${deity.statusColor} border shadow-sm mb-3`}>{deity.status}</p>
                <Button 
                  asChild 
                  size="sm" 
                  className="w-full bg-white/80 hover:bg-white text-gray-800 font-bold shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                  variant="secondary"
                >
                  <Link href={`/deities/${deity.id}`}>
                    立即諮詢
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 熱門商品區 */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            🛒 熱門祈福商品
          </h2>
          <Button asChild variant="outline">
            <Link href="/shop">
              查看更多商品
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* 商品預覽卡片 - 這些將從API獲取 */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-2">
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg mb-2 flex items-center justify-center">
                <span className="text-4xl">🧧</span>
              </div>
              <CardTitle className="text-sm">招財紅包袋</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 mb-2">財神加持</p>
              <p className="font-bold text-lg text-amber-600">NT$ 188</p>
              <Button size="sm" className="w-full mt-2">
                加入購物車
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-2">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg mb-2 flex items-center justify-center">
                <span className="text-4xl">💝</span>
              </div>
              <CardTitle className="text-sm">姻緣紅繩</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 mb-2">月老祝福</p>
              <p className="font-bold text-lg text-amber-600">NT$ 299</p>
              <Button size="sm" className="w-full mt-2">
                加入購物車
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-2">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-2 flex items-center justify-center">
                <span className="text-4xl">🧿</span>
              </div>
              <CardTitle className="text-sm">平安護身符</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 mb-2">觀音庇佑</p>
              <p className="font-bold text-lg text-amber-600">NT$ 388</p>
              <Button size="sm" className="w-full mt-2">
                加入購物車
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-2">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-2 flex items-center justify-center">
                <span className="text-4xl">📚</span>
              </div>
              <CardTitle className="text-sm">文昌開智筆</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 mb-2">學業精進</p>
              <p className="font-bold text-lg text-amber-600">NT$ 488</p>
              <Button size="sm" className="w-full mt-2">
                加入購物車
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 社群動態區 */}
      <section className="bg-gradient-to-r from-slate-100 to-slate-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            💬 廟宇社群動態
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">最新許願</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border-l-4 border-pink-400 pl-3">
                    <p className="text-sm text-gray-600">匿名用戶</p>
                    <p className="font-medium">希望能找到真愛❤️</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-3">
                    <p className="text-sm text-gray-600">小明</p>
                    <p className="font-medium">祈求考試順利🙏</p>
                  </div>
                </div>
                <Button asChild size="sm" variant="ghost" className="mt-4">
                  <Link href="/community">查看更多</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">感謝回饋</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-400 pl-3">
                    <p className="text-sm text-gray-600">Lisa</p>
                    <p className="font-medium">面試成功了！謝謝財神爺🙏</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-3">
                    <p className="text-sm text-gray-600">阿華</p>
                    <p className="font-medium">平安符真的很靈驗✨</p>
                  </div>
                </div>
                <Button asChild size="sm" variant="ghost" className="mt-4">
                  <Link href="/community">查看更多</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">熱門話題</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">#愛情</span>
                    <span className="text-sm">108 個討論</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">#事業</span>
                    <span className="text-sm">89 個討論</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">#健康</span>
                    <span className="text-sm">67 個討論</span>
                  </div>
                </div>
                <Button asChild size="sm" variant="ghost" className="mt-4">
                  <Link href="/community">參與討論</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">🏯 線上寺廟</h3>
            <p className="text-gray-400">心誠則靈，有求必應</p>
          </div>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link href="/about" className="hover:text-white">關於我們</Link>
            <Link href="/contact" className="hover:text-white">聯絡我們</Link>
            <Link href="/privacy" className="hover:text-white">隱私政策</Link>
            <Link href="/terms" className="hover:text-white">服務條款</Link>
          </div>
          <p className="text-xs text-gray-500 mt-6">
            © 2025 線上寺廟. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
