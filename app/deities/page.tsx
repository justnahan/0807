import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '神明殿堂 - 線上寺廟',
  description: '選擇您要諮詢的神明，獲得專業的人生指引。六位神明各司其職，為您解答疑惑。',
}

const deities = [
  { 
    id: 'yuelao', 
    name: '月老司機', 
    specialty: '感情問題', 
    emoji: '💕', 
    status: '紅線活躍中',
    description: '專精感情諮詢，無論是戀愛煩惱、分手挽回，還是單身脫單，月老司機都能為您牽紅線。',
    expertise: ['戀愛諮詢', '分手挽回', '單身脫單', '婚姻和諧'],
    greeting: '嘿！年輕人，感情路上遇到什麼問題了嗎？老司機帶你上路！',
    gradient: 'from-pink-100 via-pink-200 to-pink-400',
    borderColor: 'hover:border-pink-400 hover:shadow-pink-200/50',
    statusColor: 'bg-pink-100 text-pink-700 border border-pink-200'
  },
  { 
    id: 'wenchang', 
    name: '文昌老師', 
    specialty: '學業事業', 
    emoji: '📚', 
    status: '智慧加持中',
    description: '掌管學業與事業運勢，無論是考試祈福、職場升遷，還是創意靈感，都能為您指點迷津。',
    expertise: ['考試祈福', '職場升遷', '創意靈感', '學習困擾'],
    greeting: '學而時習之，不亦說乎？有什麼學習或事業上的問題，歡迎與我討論。',
    gradient: 'from-blue-100 via-blue-200 to-blue-400',
    borderColor: 'hover:border-blue-400 hover:shadow-blue-200/50',
    statusColor: 'bg-blue-100 text-blue-700 border border-blue-200'
  },
  { 
    id: 'guanyin', 
    name: '觀音媽咪', 
    specialty: '健康平安', 
    emoji: '🌸', 
    status: '慈悲守護中',
    description: '慈悲為懷的觀音媽咪，專門處理健康、平安與內心平靜的問題，給您最溫暖的守護。',
    expertise: ['身心健康', '家庭和諧', '內心平靜', '人際關係'],
    greeting: '孩子，讓媽咪為您消除煩惱，帶來內心的平靜與安詳。',
    gradient: 'from-pink-50 via-pink-100 to-pink-200',
    borderColor: 'hover:border-pink-300 hover:shadow-pink-100/50',
    statusColor: 'bg-pink-50 text-pink-600 border border-pink-200'
  },
  { 
    id: 'guandi', 
    name: '關老大', 
    specialty: '正義決策', 
    emoji: '⚔️', 
    status: '正氣凜然中',
    description: '義薄雲天的關公，專門解決正義、決策與道德選擇的難題，為您指引正確的道路。',
    expertise: ['商業判斷', '人際糾紛', '道德選擇', '正義伸張'],
    greeting: '義字當頭！有什麼需要明辨是非的事情，儘管來找關某人！',
    gradient: 'from-red-100 via-red-300 to-red-500',
    borderColor: 'hover:border-red-400 hover:shadow-red-200/50',
    statusColor: 'bg-red-100 text-red-700 border border-red-200'
  },
  { 
    id: 'mazu', 
    name: '媽祖姐姐', 
    specialty: '出行平安', 
    emoji: '⛵', 
    status: '海風護航中',
    description: '守護海上平安的媽祖，現在也保佑陸地上的旅行安全，無論搬家、旅遊都能庇佑您。',
    expertise: ['旅遊順利', '搬家吉日', '交通安全', '遷移問題'],
    greeting: '想要出門平安順利嗎？姐姐我來罩你，保證一路順風！',
    gradient: 'from-cyan-100 via-teal-200 to-teal-400',
    borderColor: 'hover:border-teal-400 hover:shadow-teal-200/50',
    statusColor: 'bg-teal-100 text-teal-700 border border-teal-200'
  },
  { 
    id: 'caishen', 
    name: '財神老闆', 
    specialty: '財運事業', 
    emoji: '💰', 
    status: '金光閃閃中',
    description: '掌管財運的財神爺，專門處理投資、事業發展與偏財運勢，讓您的財庫滿滿。',
    expertise: ['投資建議', '事業發展', '偏財運勢', '財務規劃'],
    greeting: '想發財嗎？來對地方了！老闆我專門幫人開財路，保證讓你荷包滿滿！',
    gradient: 'from-yellow-100 via-yellow-300 to-orange-400',
    borderColor: 'hover:border-yellow-400 hover:shadow-yellow-200/50',
    statusColor: 'bg-yellow-100 text-yellow-700 border border-yellow-200'
  },
]

export default function DeitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      {/* 頁面標題區 */}
      <header className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🔮 神明殿堂
          </h1>
          <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
            選擇您要諮詢的神明，每位神明都有專精領域，為您提供最適合的人生指引
          </p>
        </div>
      </header>

      {/* 神明選擇區 */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            請選擇您要諮詢的神明
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            每位神明都有不同的專長領域，請根據您的問題類型選擇最適合的神明。如果不確定，也可以讓我們為您推薦。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deities.map((deity) => (
            <Card 
              key={deity.id}
              className={`bg-gradient-to-br ${deity.gradient} hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 border-2 ${deity.borderColor} group relative overflow-hidden`}
            >
              {/* 光效邊框 */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-125 group-hover:animate-bounce transition-all duration-500">
                  {deity.emoji}
                </div>
                <CardTitle className="text-2xl text-gray-800 group-hover:text-gray-900 font-bold">{deity.name}</CardTitle>
                <CardDescription className="text-lg text-gray-600 group-hover:text-gray-700 font-medium">{deity.specialty}</CardDescription>
                <div className={`inline-block ${deity.statusColor} px-4 py-2 rounded-full text-sm font-bold mt-3 shadow-sm group-hover:shadow-md transition-all duration-300`}>
                  {deity.status}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 relative z-10">
                <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800">
                  {deity.description}
                </p>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 group-hover:text-gray-900">專精領域：</h4>
                  <div className="flex flex-wrap gap-2">
                    {deity.expertise.map((skill) => (
                      <span 
                        key={skill}
                        className="bg-white/60 text-gray-700 px-3 py-1 rounded-full text-xs border border-gray-200 font-medium shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/70 p-4 rounded-xl border border-white/50 backdrop-blur-sm shadow-sm">
                  <p className="text-sm text-gray-700 italic font-medium group-hover:text-gray-800">
                    &ldquo;{deity.greeting}&rdquo;
                  </p>
                </div>

                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-bold py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                >
                  <Link href={`/deities/${deity.id}`}>
                    🙏 立即諮詢 {deity.name}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 不知道選誰的幫助區 */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">
                🤔 不知道選擇哪位神明？
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                沒關係！我們可以根據您的問題類型為您推薦最適合的神明，或是您也可以讓系統隨機為您選擇。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  🎯 智能推薦神明
                </Button>
                <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                  🎲 隨機選擇神明
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 問事流程說明 */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            📋 問事流程說明
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-t-4 border-blue-400">
              <CardHeader>
                <div className="text-4xl mb-2">1️⃣</div>
                <CardTitle className="text-lg">選擇神明</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  根據您的問題類型選擇最適合的神明
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-green-400">
              <CardHeader>
                <div className="text-4xl mb-2">2️⃣</div>
                <CardTitle className="text-lg">誠心問事</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  詳細描述您的問題，越具體越好
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-yellow-400">
              <CardHeader>
                <div className="text-4xl mb-2">3️⃣</div>
                <CardTitle className="text-lg">抽籤解答</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  神明將為您抽取專屬的指引籤詩
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-red-400">
              <CardHeader>
                <div className="text-4xl mb-2">4️⃣</div>
                <CardTitle className="text-lg">擲筊確認</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  透過擲筊確認籤詩是否適用於您
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}