import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '聯絡我們 - 線上寺廟',
  description: '有任何問題或建議嗎？我們很樂意為您服務。24小時客服支援，快速回應您的需求。',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            📞 聯絡我們
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            有任何問題或建議嗎？我們很樂意為您服務
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 聯絡表單 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">✉️ 發送訊息</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      姓名 *
                    </label>
                    <Input id="name" placeholder="請輸入您的姓名" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      電子郵件 *
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      電話號碼
                    </label>
                    <Input id="phone" type="tel" placeholder="請輸入您的電話號碼" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      主旨 *
                    </label>
                    <select id="subject" className="w-full p-2 border border-gray-300 rounded-md" required>
                      <option value="">請選擇問題類型</option>
                      <option value="question">一般問題諮詢</option>
                      <option value="technical">技術支援</option>
                      <option value="order">訂單相關</option>
                      <option value="complaint">客訴與建議</option>
                      <option value="cooperation">合作提案</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      詳細說明 *
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="請詳細描述您的問題或建議..."
                      className="min-h-32"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    🚀 發送訊息
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* 聯絡資訊 */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">📍 聯絡資訊</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <h3 className="font-semibold">電子郵件</h3>
                      <p className="text-gray-600">support@temple.com</p>
                      <p className="text-sm text-gray-500">我們會在24小時內回覆您的郵件</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">💬</span>
                    <div>
                      <h3 className="font-semibold">線上客服</h3>
                      <p className="text-gray-600">24/7 即時客服</p>
                      <Button size="sm" className="mt-2">
                        開始對話
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <h3 className="font-semibold">服務時間</h3>
                      <p className="text-gray-600">全年無休，24小時服務</p>
                      <p className="text-sm text-gray-500">神明不打烊，我們也不打烊！</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">🔥 常見問題</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <details className="cursor-pointer">
                    <summary className="font-medium hover:text-emerald-600">
                      問事需要付費嗎？
                    </summary>
                    <p className="text-sm text-gray-600 mt-2 pl-4">
                      基本的問事服務完全免費！您只需註冊會員即可享受神明指引。
                    </p>
                  </details>
                  
                  <details className="cursor-pointer">
                    <summary className="font-medium hover:text-emerald-600">
                      如何知道籤詩是否準確？
                    </summary>
                    <p className="text-sm text-gray-600 mt-2 pl-4">
                      我們的AI結合了千年籤詩智慧和現代心理學，準確度經過多次驗證。
                      您也可以透過擲筊功能來確認籤詩的適用性。
                    </p>
                  </details>
                  
                  <details className="cursor-pointer">
                    <summary className="font-medium hover:text-emerald-600">
                      商品是否真的經過加持？
                    </summary>
                    <p className="text-sm text-gray-600 mt-2 pl-4">
                      所有商品都經過嚴格的品質把關和祈福儀式，
                      我們與多家知名廟宇合作，確保每件商品的靈驗度。
                    </p>
                  </details>
                  
                  <details className="cursor-pointer">
                    <summary className="font-medium hover:text-emerald-600">
                      可以退換貨嗎？
                    </summary>
                    <p className="text-sm text-gray-600 mt-2 pl-4">
                      提供7天無理由退換貨服務，但請注意已開光的商品
                      需要特殊處理程序。
                    </p>
                  </details>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">📱 其他聯絡方式</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">📘</span>
                    <span className="text-gray-700">Facebook: @線上寺廟</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">📸</span>
                    <span className="text-gray-700">Instagram: @online_temple</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">💚</span>
                    <span className="text-gray-700">LINE: @onlinetemple</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 快速操作區 */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-emerald-800">
                  🌟 需要立即協助？
                </h2>
                <p className="text-emerald-700 mb-6">
                  如果您遇到緊急問題，可以直接透過以下方式獲得即時幫助
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    💬 即時客服
                  </Button>
                  <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                    📞 緊急聯絡
                  </Button>
                  <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                    🔮 AI智能助手
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}