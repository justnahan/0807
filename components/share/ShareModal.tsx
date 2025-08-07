'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Copy, Download, Check } from 'lucide-react'
import SocialLinks from './SocialLinks'
import LotteryShareCard, { LotteryResult } from './LotteryShareCard'

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  lottery: LotteryResult
}

export default function ShareModal({ isOpen, onClose, lottery }: ShareModalProps) {
  const [isAnonymous, setIsAnonymous] = useState(true)
  const [copied, setCopied] = useState(false)

  const generateShareText = () => {
    const anonymousText = isAnonymous ? '（匿名分享）' : ''
    return `🏮 今日籤詩分享 ${anonymousText}

${lottery.deityEmoji} ${lottery.deity} 指引：

📜 ${lottery.lotteryText}

💭 ${lottery.interpretation}

${lottery.advice ? `💡 ${lottery.advice}` : ''}

✨ 心誠則靈，有求必應 ✨`
  }

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(generateShareText())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Handle clipboard error silently
    }
  }

  const handleDownloadImage = () => {
    // 這裡可以實現將分享卡片轉換為圖片並下載的功能
    // 使用 html2canvas 或類似庫來實現
    // TODO: Implement image download functionality
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">
            🎉 分享您的神明指引
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* 隱私設定 */}
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="anonymous"
                checked={isAnonymous}
                onCheckedChange={setIsAnonymous}
              />
              <Label htmlFor="anonymous" className="text-sm">
                🔒 匿名分享（保護隱私）
              </Label>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              開啟後，分享內容不會顯示您的個人資訊
            </p>
          </Card>

          {/* 分享預覽卡片 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-3 text-center">
              分享預覽
            </h3>
            <LotteryShareCard 
              lottery={lottery} 
              onShare={() => { /* Empty handler for preview */ }} 
            />
          </div>

          {/* 分享選項 */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">選擇分享方式</h3>
            
            {/* 社群平台分享 */}
            <SocialLinks shareText={generateShareText()} />

            {/* 複製文字 */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={handleCopyText}
                className="flex-1"
                size="sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-green-600" />
                    已複製
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    複製文字
                  </>
                )}
              </Button>

              {/* 下載圖片 */}
              <Button
                variant="outline"
                onClick={handleDownloadImage}
                className="flex-1"
                size="sm"
              >
                <Download className="w-4 h-4 mr-2" />
                下載圖片
              </Button>
            </div>
          </div>

          {/* 溫馨提示 */}
          <Card className="p-3 bg-yellow-50 border-yellow-200">
            <p className="text-xs text-yellow-800">
              💫 <strong>分享小提醒：</strong> 分享您的神明指引可以為其他人帶來正能量和希望，
              但請記住，每個人的人生道路不同，籤詩僅供參考和啟發。
            </p>
          </Card>

          {/* 關閉按鈕 */}
          <Button onClick={onClose} variant="ghost" className="w-full">
            完成
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}