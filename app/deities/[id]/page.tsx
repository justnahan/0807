'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { notFound } from 'next/navigation'

const deities = {
  yuelao: {
    name: '月老司機',
    emoji: '💕',
    specialty: '感情問題',
    background: 'bg-gradient-to-br from-pink-100 via-red-100 to-pink-200',
    color: 'text-pink-800',
    greeting: '嘿！年輕人，感情路上遇到什麼問題了嗎？老司機帶你上路！',
    quickQuestions: [
      '我什麼時候能遇到真愛？',
      '前任還會回來嗎？',
      '我們的感情能長久嗎？',
      '如何挽回失去的愛情？'
    ]
  },
  wenchang: {
    name: '文昌老師',
    emoji: '📚',
    specialty: '學業事業',
    background: 'bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200',
    color: 'text-blue-800',
    greeting: '學而時習之，不亦說乎？有什麼學習或事業上的問題，歡迎與我討論。',
    quickQuestions: [
      '這次考試能順利通過嗎？',
      '我適合轉換工作跑道嗎？',
      '如何提升我的職場競爭力？',
      '創業的時機成熟了嗎？'
    ]
  },
  guanyin: {
    name: '觀音媽咪',
    emoji: '🌸',
    specialty: '健康平安',
    background: 'bg-gradient-to-br from-green-100 via-emerald-100 to-green-200',
    color: 'text-green-800',
    greeting: '孩子，讓媽咪為您消除煩惱，帶來內心的平靜與安詳。',
    quickQuestions: [
      '家人的健康狀況如何？',
      '如何化解內心的焦慮？',
      '家庭關係能和諧嗎？',
      '如何找到內心的平靜？'
    ]
  },
  guandi: {
    name: '關老大',
    emoji: '⚔️',
    specialty: '正義決策',
    background: 'bg-gradient-to-br from-orange-100 via-yellow-100 to-orange-200',
    color: 'text-orange-800',
    greeting: '義字當頭！有什麼需要明辨是非的事情，儘管來找關某人！',
    quickQuestions: [
      '這個商業決策是正確的嗎？',
      '如何處理職場糾紛？',
      '我該如何伸張正義？',
      '這個選擇符合道德嗎？'
    ]
  },
  mazu: {
    name: '媽祖姐姐',
    emoji: '⛵',
    specialty: '出行平安',
    background: 'bg-gradient-to-br from-cyan-100 via-blue-100 to-cyan-200',
    color: 'text-cyan-800',
    greeting: '想要出門平安順利嗎？姐姐我來罩你，保證一路順風！',
    quickQuestions: [
      '這次旅行會順利嗎？',
      '搬家的時機好嗎？',
      '長途開車需要注意什麼？',
      '出國留學的運勢如何？'
    ]
  },
  caishen: {
    name: '財神老闆',
    emoji: '💰',
    specialty: '財運事業',
    background: 'bg-gradient-to-br from-yellow-100 via-amber-100 to-yellow-200',
    color: 'text-yellow-800',
    greeting: '想發財嗎？來對地方了！老闆我專門幫人開財路，保證讓你荷包滿滿！',
    quickQuestions: [
      '投資股票的時機對嗎？',
      '我的財運什麼時候轉好？',
      '這個生意能賺錢嗎？',
      '如何增加被動收入？'
    ]
  }
}

const fortuneTexts = [
  {
    number: '第十八籤',
    poem: '山重水複疑無路，柳暗花明又一村。',
    explanation: '目前雖然困難重重，但只要堅持下去，必將迎來轉機。困境是成功前的考驗。',
    advice: '保持耐心，積極面對挑戰，好運就在不遠處。'
  },
  {
    number: '第三十五籤',
    poem: '一帆風順正當時，萬事亨通不用疑。',
    explanation: '現在是您人生的順風期，各方面都會有很好的發展。',
    advice: '把握機會，積極行動，但也要保持謙虛的心態。'
  },
  {
    number: '第七籤',
    poem: '守得雲開見月明，撥開迷霧現光明。',
    explanation: '經過一段混沌期後，事情會逐漸明朗，困擾您的問題即將解決。',
    advice: '再堅持一下，答案很快就會出現，不要急於求成。'
  }
]

interface DeityPageProps {
  params: Promise<{ id: string }>
}

export default function DeityPage({ params }: DeityPageProps) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null)
  const [step, setStep] = useState<'greeting' | 'question' | 'divination' | 'result'>('greeting')
  const [question, setQuestion] = useState('')
  const [isShaking, setIsShaking] = useState(false)
  const [fortune, setFortune] = useState<typeof fortuneTexts[0] | null>(null)
  const [diceResult, setDiceResult] = useState<'聖筊' | '笑筊' | '陰筊' | null>(null)

  // Resolve params
  React.useEffect(() => {
    params.then(setResolvedParams)
  }, [params])

  if (!resolvedParams) {
    return <div>Loading...</div>
  }

  const deity = deities[resolvedParams.id as keyof typeof deities]
  
  if (!deity) {
    notFound()
  }

  const handleQuestionSubmit = () => {
    if (question.trim()) {
      setStep('divination')
    }
  }

  const handleDivination = () => {
    setIsShaking(true)
    
    setTimeout(() => {
      const randomFortune = fortuneTexts[Math.floor(Math.random() * fortuneTexts.length)]
      setFortune(randomFortune)
      setIsShaking(false)
      setStep('result')
    }, 2000)
  }

  const handleDiceThrow = () => {
    const results = ['聖筊', '笑筊', '陰筊'] as const
    const randomResult = results[Math.floor(Math.random() * results.length)]
    setDiceResult(randomResult)
  }

  const resetConsultation = () => {
    setStep('greeting')
    setQuestion('')
    setFortune(null)
    setDiceResult(null)
    setIsShaking(false)
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className={`min-h-screen ${deity.background}`}>
        <div className="container mx-auto px-4 py-8">
          {/* 神明頭像和歡迎 */}
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{deity.emoji}</div>
            <h1 className={`text-4xl font-bold ${deity.color} mb-2`}>
              {deity.name}
            </h1>
            <p className="text-xl text-gray-700">
              專精領域：{deity.specialty}
            </p>
          </div>

          {step === 'greeting' && (
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">神明問候</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-lg italic text-gray-800">
                    &ldquo;{deity.greeting}&rdquo;
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">常見問題快速選擇：</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {deity.quickQuestions.map((q, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="text-left h-auto p-4 whitespace-normal"
                        onClick={() => {
                          setQuestion(q)
                          setStep('question')
                        }}
                      >
                        {q}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Button 
                    size="lg"
                    onClick={() => setStep('question')}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    🙏 開始問事
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 'question' && (
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">請詳細描述您的問題</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label htmlFor="question" className="block text-sm font-medium mb-2">
                    您的問題 (越詳細越好)
                  </label>
                  <Textarea
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="請誠心描述您遇到的問題..."
                    className="min-h-32"
                  />
                </div>

                <div className="text-center space-x-4">
                  <Button variant="outline" onClick={() => setStep('greeting')}>
                    🔙 返回
                  </Button>
                  <Button 
                    onClick={handleQuestionSubmit}
                    disabled={!question.trim()}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    🎯 提交問題
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 'divination' && (
            <Card className="max-w-4xl mx-auto text-center">
              <CardHeader>
                <CardTitle className="text-2xl">神明正在為您抽籤...</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">您的問題：</p>
                  <p className="font-medium">{question}</p>
                </div>

                <div className={`text-8xl ${isShaking ? 'animate-bounce' : ''}`}>
                  🏺
                </div>

                <p className="text-lg text-gray-600">
                  請誠心祈禱，{deity.name}正在為您選取最適合的籤詩...
                </p>

                {!isShaking && (
                  <Button 
                    size="lg"
                    onClick={handleDivination}
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-800"
                  >
                    🎋 抽取籤詩
                  </Button>
                )}
              </CardContent>
            </Card>
          )}

          {step === 'result' && fortune && (
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">📜 {fortune.number}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border-2 border-yellow-200">
                      <p className="text-2xl font-bold text-gray-800 mb-4">
                        {fortune.poem}
                      </p>
                      <p className="text-lg text-gray-700 mb-4">
                        {fortune.explanation}
                      </p>
                      <p className="text-md text-blue-700 font-medium">
                        💡 {deity.name}的建議：{fortune.advice}
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-lg mb-4">此籤是否適合您的問題？讓我們擲筊確認：</p>
                    <div className="space-y-4">
                      <div className="text-6xl">
                        🥄🥄
                      </div>
                      
                      {!diceResult ? (
                        <Button 
                          size="lg"
                          onClick={handleDiceThrow}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          🎲 擲筊確認
                        </Button>
                      ) : (
                        <div className="space-y-4">
                          <div className={`text-xl font-bold p-4 rounded-lg ${
                            diceResult === '聖筊' ? 'bg-green-100 text-green-800' :
                            diceResult === '笑筊' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            結果：{diceResult}
                          </div>
                          
                          <p className="text-gray-700">
                            {diceResult === '聖筊' && '✅ 此籤非常適合您的問題！請好好參考神明的指引。'}
                            {diceResult === '笑筊' && '😊 神明覺得您太過擔心了，放輕鬆一些，事情會自然好轉。'}
                            {diceResult === '陰筊' && '🤔 建議您重新整理思緒，再次問事，或許問題需要從不同角度思考。'}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 pt-6">
                    <Button variant="outline" onClick={resetConsultation}>
                      🔄 重新問事
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      ❤️ 收藏此籤詩
                    </Button>
                    <Button variant="outline">
                      📤 分享到社群
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 相關商品推薦 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">🛒 {deity.name}推薦的祈福商品</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="text-3xl mb-2">🧧</div>
                      <h4 className="font-medium mb-1">開運紅包</h4>
                      <p className="text-sm text-gray-600 mb-2">{deity.name}加持</p>
                      <p className="font-bold text-amber-600">NT$ 199</p>
                      <Button size="sm" className="w-full mt-2">加入購物車</Button>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="text-3xl mb-2">🧿</div>
                      <h4 className="font-medium mb-1">專屬護身符</h4>
                      <p className="text-sm text-gray-600 mb-2">{deity.specialty}專用</p>
                      <p className="font-bold text-amber-600">NT$ 388</p>
                      <Button size="sm" className="w-full mt-2">加入購物車</Button>
                    </div>

                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="text-3xl mb-2">🕯️</div>
                      <h4 className="font-medium mb-1">祈福蜡燭</h4>
                      <p className="text-sm text-gray-600 mb-2">點亮心願</p>
                      <p className="font-bold text-amber-600">NT$ 288</p>
                      <Button size="sm" className="w-full mt-2">加入購物車</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Fix React import
import React from 'react'