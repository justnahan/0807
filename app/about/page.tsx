import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '關於我們 - 線上寺廟',
  description: '了解線上寺廟的創立理念、服務宗旨和團隊介紹。我們致力於將傳統信仰與現代科技完美結合。',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🏯 關於線上寺廟
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            傳統信仰與現代科技的完美結合，為現代人提供心靈慰藉與指引
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">✨ 我們的使命</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  線上寺廟致力於將東方傳統信仰文化與現代AI技術完美融合，
                  為現代人提供便利、親切的心靈慰藉服務。我們相信，無論科技如何進步，
                  人們對於心靈指引和精神寄託的需求永遠不會消失。
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">💡 創立理念</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-amber-700">🌟 傳統與現代的橋樑</h3>
                    <p className="text-gray-700">
                      我們希望讓年輕世代能以更現代、有趣的方式接觸傳統信仰文化，
                      同時保持對神明的敬重之心。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-amber-700">🤖 AI賦能信仰體驗</h3>
                    <p className="text-gray-700">
                      運用人工智能技術，讓每位用戶都能獲得個人化的籤詩解釋和人生建議，
                      讓神明的智慧更貼近現代生活。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-amber-700">🌈 包容與開放</h3>
                    <p className="text-gray-700">
                      我們歡迎所有尋求心靈慰藉的人，不分背景、年齡或信仰程度，
                      都能在這裡找到屬於自己的平靜與指引。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-amber-700">🔮 誠信與品質</h3>
                    <p className="text-gray-700">
                      所有商品都經過嚴格篩選，確保品質與靈驗度。
                      我們相信誠心服務每一位用戶，就是最好的修行。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">👥 神明團隊介紹</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-3">
                    <div className="text-5xl mb-3">💕</div>
                    <h3 className="text-lg font-bold text-pink-700">月老司機</h3>
                    <p className="text-sm text-gray-600">
                      資深感情顧問，專精戀愛諮詢。
                      以幽默風趣的方式為現代人解決感情困擾。
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="text-5xl mb-3">📚</div>
                    <h3 className="text-lg font-bold text-blue-700">文昌老師</h3>
                    <p className="text-sm text-gray-600">
                      學術權威，事業導師。
                      以溫和耐心的態度指導學業與職場發展。
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="text-5xl mb-3">🌸</div>
                    <h3 className="text-lg font-bold text-green-700">觀音媽咪</h3>
                    <p className="text-sm text-gray-600">
                      慈悲守護者，心靈導師。
                      以母親般的溫暖關懷每位信徒的身心健康。
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="text-5xl mb-3">⚔️</div>
                    <h3 className="text-lg font-bold text-orange-700">關老大</h3>
                    <p className="text-sm text-gray-600">
                      正義化身，決策專家。
                      以義薄雲天的精神為信徒指引正確道路。
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="text-5xl mb-3">⛵</div>
                    <h3 className="text-lg font-bold text-cyan-700">媽祖姐姐</h3>
                    <p className="text-sm text-gray-600">
                      出行守護神，平安使者。
                      保佑每位信徒的旅程平安順遂。
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="text-5xl mb-3">💰</div>
                    <h3 className="text-lg font-bold text-yellow-700">財神老闆</h3>
                    <p className="text-sm text-gray-600">
                      財運專家，投資顧問。
                      以商業眼光為信徒開拓財源之路。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">🌟 服務特色</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <h4 className="font-semibold">個人化問事體驗</h4>
                        <p className="text-sm text-gray-600">
                          AI智能分析您的問題，提供最貼切的神明推薦和籤詩解釋
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🛒</span>
                      <div>
                        <h4 className="font-semibold">精選祈福商品</h4>
                        <p className="text-sm text-gray-600">
                          嚴選各式開運商品，每件都經過神明加持，確保靈驗有效
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">💬</span>
                      <div>
                        <h4 className="font-semibold">溫馨社群互動</h4>
                        <p className="text-sm text-gray-600">
                          與其他信徒分享心得、互相鼓勵，建立正向的信仰社群
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">📱</span>
                      <div>
                        <h4 className="font-semibold">隨時隨地問事</h4>
                        <p className="text-sm text-gray-600">
                          24/7全天候服務，無論何時何地都能獲得神明的指引
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">📞 聯絡我們</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-700">
                  如果您對我們的服務有任何疑問或建議，歡迎隨時聯絡我們
                </p>
                <div className="flex justify-center space-x-8">
                  <div>
                    <p className="font-medium">📧 電子郵件</p>
                    <p className="text-sm text-gray-600">support@temple.com</p>
                  </div>
                  <div>
                    <p className="font-medium">🕐 服務時間</p>
                    <p className="text-sm text-gray-600">24小時全天候服務</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}