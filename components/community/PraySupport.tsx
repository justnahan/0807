'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Heart, Sparkles, Send } from 'lucide-react'
import { Wish } from '@/lib/supabase'

interface PraySupportProps {
  isOpen: boolean
  onClose: () => void
  wish: Wish
  onSupport: () => void
}

export default function PraySupport({ isOpen, onClose, wish, onSupport }: PraySupportProps) {
  const [supportMessage, setSupportMessage] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(true)
  const [selectedPrayType, setSelectedPrayType] = useState<'pray' | 'encouragement' | 'blessing'>('pray')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const prayTypes = [
    {
      id: 'pray' as const,
      emoji: '🙏',
      title: '我也在祈禱',
      description: '與許願者一同向神明祈福',
      color: 'bg-blue-50 border-blue-200 text-blue-800'
    },
    {
      id: 'encouragement' as const,
      emoji: '💪',
      title: '給予鼓勵',
      description: '為許願者加油打氣',
      color: 'bg-green-50 border-green-200 text-green-800'
    },
    {
      id: 'blessing' as const,
      emoji: '✨',
      title: '送上祝福',
      description: '傳遞正能量和祝福',
      color: 'bg-purple-50 border-purple-200 text-purple-800'
    }
  ]

  const quickMessages = {
    pray: [
      '🙏 願神明聽見你的心聲',
      '🙏 我也在為你祈禱',
      '🙏 心誠則靈，會有好結果的',
      '🙏 神明會保佑你的'
    ],
    encouragement: [
      '💪 加油！相信自己',
      '💪 你一定可以做到的',
      '💪 堅持下去，好事會發生',
      '💪 為你的勇氣點讚'
    ],
    blessing: [
      '✨ 祝福你心想事成',
      '✨ 願你的願望早日實現',
      '✨ 送你滿滿的正能量',
      '✨ 願幸福與你同在'
    ]
  }

  const handleQuickMessage = (message: string) => {
    setSupportMessage(message)
  }

  const handleSubmit = async () => {
    if (!supportMessage.trim()) return

    setIsSubmitting(true)
    try {
      // 這裡應該調用 API 來保存支持訊息
      await new Promise(resolve => setTimeout(resolve, 1000)) // 模擬 API 調用
      onSupport()
      setSupportMessage('')
    } catch {
      // Handle error silently or show user-friendly message
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center flex items-center justify-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            為信眾送上支持
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* 許願內容預覽 */}
          <Card className="p-4 bg-gray-50">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{wish.deity_emoji}</span>
              <span className="text-sm font-medium">{wish.deity_name}</span>
            </div>
            <p className="text-sm text-gray-700 line-clamp-3">
              {wish.wish_content}
            </p>
          </Card>

          {/* 支持類型選擇 */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">選擇支持方式</Label>
            <div className="grid grid-cols-1 gap-2">
              {prayTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`p-3 cursor-pointer transition-all ${
                    selectedPrayType === type.id
                      ? type.color
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedPrayType(type.id)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{type.emoji}</span>
                    <div>
                      <div className="font-medium text-sm">{type.title}</div>
                      <div className="text-xs text-gray-600">{type.description}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* 快速訊息選擇 */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">快速訊息</Label>
            <div className="grid grid-cols-2 gap-2">
              {quickMessages[selectedPrayType].map((message, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickMessage(message)}
                  className="text-xs h-auto py-2 px-3 justify-start"
                >
                  {message}
                </Button>
              ))}
            </div>
          </div>

          <Separator />

          {/* 自訂訊息 */}
          <div className="space-y-3">
            <Label htmlFor="supportMessage" className="text-sm font-medium">
              或寫下您的支持話語
            </Label>
            <Textarea
              id="supportMessage"
              placeholder="寫下您想對許願者說的話..."
              value={supportMessage}
              onChange={(e) => setSupportMessage(e.target.value)}
              className="min-h-[100px] resize-none"
              maxLength={200}
            />
            <div className="text-xs text-gray-500 text-right">
              {supportMessage.length}/200
            </div>
          </div>

          {/* 匿名選項 */}
          <Card className="p-3 bg-blue-50 border-blue-200">
            <div className="flex items-center space-x-2">
              <Switch
                id="anonymous-support"
                checked={isAnonymous}
                onCheckedChange={setIsAnonymous}
              />
              <Label htmlFor="anonymous-support" className="text-sm text-blue-800">
                🔒 匿名支持
              </Label>
            </div>
            <p className="text-xs text-blue-600 mt-1">
              開啟後，您的支持訊息不會顯示個人資訊
            </p>
          </Card>

          {/* 溫馨提示 */}
          <Card className="p-3 bg-yellow-50 border-yellow-200">
            <div className="flex items-start gap-2">
              <Sparkles className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-yellow-800">
                <p className="font-medium mb-1">💫 支持小提醒</p>
                <p>您的每一句祝福都是正能量的傳遞。請用溫暖的話語給予支持，避免批評或負面內容。</p>
              </div>
            </div>
          </Card>

          {/* 提交按鈕 */}
          <div className="flex gap-2">
            <Button onClick={onClose} variant="outline" className="flex-1">
              取消
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!supportMessage.trim() || isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? (
                '送出中...'
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  送出支持
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}