import { Navigation } from '@/components/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import WishWall from '@/components/community/WishWall'
import ThankfulStories from '@/components/community/ThankfulStories'
import CommunityStats from '@/components/community/CommunityStats'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '廟宇社群 - 線上寺廟',
  description: '與其他信徒交流心得、分享籤詩、許願祈福。一起建立正向的信仰社群，感受社群互動的溫暖力量。',
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      {/* 頁面標題區 */}
      <header className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
        <div className="absolute top-4 right-4 text-6xl opacity-20">🏮</div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🏮 廟宇社群
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            與信眾一同分享心願、感謝回饋，建立溫暖的信仰社群
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 社群統計總覽 */}
        <div className="mb-8">
          <CommunityStats showDetailed={false} />
        </div>

        {/* 主要內容區域 */}
        <Tabs defaultValue="wishes" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="wishes" className="flex items-center gap-2">
              🙏 許願牆
            </TabsTrigger>
            <TabsTrigger value="stories" className="flex items-center gap-2">
              ✨ 感謝故事
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex items-center gap-2">
              📊 社群統計
            </TabsTrigger>
            <TabsTrigger value="featured" className="flex items-center gap-2">
              ⭐ 精選內容
            </TabsTrigger>
          </TabsList>

          {/* 許願牆 */}
          <TabsContent value="wishes" className="mt-6">
            <WishWall showCreateForm={true} />
          </TabsContent>

          {/* 感謝故事分享 */}
          <TabsContent value="stories" className="mt-6">
            <ThankfulStories />
          </TabsContent>

          {/* 詳細統計 */}
          <TabsContent value="stats" className="mt-6">
            <CommunityStats showDetailed={true} />
          </TabsContent>

          {/* 精選內容 */}
          <TabsContent value="featured" className="mt-6">
            <div className="space-y-8">
              {/* 精選感謝故事 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  🌟 本週精選故事
                </h2>
                <ThankfulStories showFeatured={true} />
              </div>

              {/* 熱門許願 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  🔥 熱門許願
                </h2>
                <WishWall showCreateForm={false} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}