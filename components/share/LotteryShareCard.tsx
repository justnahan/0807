'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Share2 } from 'lucide-react'

export interface LotteryResult {
  id: string
  deity: string
  deityEmoji: string
  question: string
  lotteryText: string
  interpretation: string
  date: string
  advice: string
}

interface LotteryShareCardProps {
  lottery: LotteryResult
  onShare: () => void
}

export default function LotteryShareCard({ lottery, onShare }: LotteryShareCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    })
  }

  return (
    <Card className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white max-w-md mx-auto relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
      <div className="absolute top-4 right-4 text-6xl opacity-20">{lottery.deityEmoji}</div>
      
      <div className="relative z-10 p-6">
        {/* 標題區域 */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-yellow-300 mb-1">
            🏮 神明指引 🏮
          </h2>
          <p className="text-sm text-yellow-200">
            {formatDate(lottery.date)}
          </p>
        </div>

        {/* 神明與問題 */}
        <div className="mb-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">{lottery.deityEmoji}</span>
            <span className="font-semibold text-yellow-300">{lottery.deity}</span>
          </div>
        </div>

        {/* 籤詩內容 */}
        <div className="bg-black/20 rounded-lg p-4 mb-4 border border-yellow-500/30">
          <div className="text-center">
            <div className="text-xs text-yellow-400 mb-2">籤詩 #{lottery.id}</div>
            <div className="font-serif text-base leading-relaxed text-yellow-100 mb-3">
              {lottery.lotteryText}
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              {lottery.interpretation}
            </div>
          </div>
        </div>

        {/* 建議 */}
        {lottery.advice && (
          <div className="bg-yellow-900/30 rounded-lg p-3 mb-4">
            <div className="text-xs text-yellow-400 mb-1">💡 神明建議</div>
            <div className="text-sm text-yellow-100">{lottery.advice}</div>
          </div>
        )}

        {/* 分享按鈕 */}
        <Button
          onClick={onShare}
          className="w-full bg-yellow-600 hover:bg-yellow-500 text-white"
          size="sm"
        >
          <Share2 className="w-4 h-4 mr-2" />
          分享籤詩
        </Button>

        {/* 品牌標識 */}
        <div className="text-center mt-4 text-xs text-yellow-400/70">
          ✨ 心誠則靈，有求必應 ✨
        </div>
      </div>
    </Card>
  )
}