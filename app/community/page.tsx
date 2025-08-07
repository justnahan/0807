import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '廟宇社群 - 線上寺廟',
  description: '與其他信徒交流心得、分享籤詩、許願祈福。一起建立正向的信仰社群。',
}

const mockPosts = [
  {
    id: '1',
    user: '小花',
    avatar: '🌸',
    time: '2 小時前',
    type: '感謝分享',
    deity: '月老司機',
    deityEmoji: '💕',
    content: '終於脫單了！感謝月老司機的指引，籤詩真的很準確 ❤️',
    tags: ['#感謝回饋', '#愛情'],
    likes: 28,
    comments: 5
  },
  {
    id: '2',
    user: '努力的學生',
    avatar: '📚',
    time: '4 小時前',
    type: '籤詩分享',
    deity: '文昌老師',
    deityEmoji: '📚',
    content: '「一帆風順正當時，萬事亨通不用疑」- 明天就要考試了，希望能順利通過！',
    tags: ['#籤詩分享', '#學業'],
    likes: 15,
    comments: 8
  },
  {
    id: '3',
    user: '平安是福',
    avatar: '🙏',
    time: '6 小時前',
    type: '許願',
    deity: '觀音媽咪',
    deityEmoji: '🌸',
    content: '家人生病住院，希望觀音媽咪能保佑早日康復 🙏',
    tags: ['#許願祈福', '#健康'],
    likes: 42,
    comments: 12,
    isAnonymous: true
  },
  {
    id: '4',
    user: '創業新手',
    avatar: '💼',
    time: '1 天前',
    type: '心得分享',
    deity: '財神老闆',
    deityEmoji: '💰',
    content: '創業半年了，按照財神爺的指引真的越來越順利！分享給也在創業的朋友們',
    tags: ['#心得交流', '#事業'],
    likes: 35,
    comments: 18
  }
]

const trendingTopics = [
  { tag: '#愛情', count: 108, color: 'bg-pink-100 text-pink-600' },
  { tag: '#事業', count: 89, color: 'bg-blue-100 text-blue-600' },
  { tag: '#健康', count: 67, color: 'bg-green-100 text-green-600' },
  { tag: '#學業', count: 45, color: 'bg-purple-100 text-purple-600' },
  { tag: '#財運', count: 38, color: 'bg-yellow-100 text-yellow-600' },
  { tag: '#平安', count: 32, color: 'bg-gray-100 text-gray-600' }
]

const topUsers = [
  { name: '智慧長者', avatar: '👴', posts: 156, likes: 2340 },
  { name: '虔誠信徒', avatar: '🙏', posts: 128, likes: 1890 },
  { name: '開心果', avatar: '😊', posts: 95, likes: 1654 }
]

export default function CommunityPage() {
  const getPostTypeColor = (type: string) => {
    switch (type) {
      case '感謝分享': return 'bg-green-100 text-green-700'
      case '籤詩分享': return 'bg-blue-100 text-blue-700'
      case '許願': return 'bg-yellow-100 text-yellow-700'
      case '心得分享': return 'bg-purple-100 text-purple-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      {/* 頁面標題區 */}
      <header className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            💬 廟宇社群
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            與其他信徒分享心得、交流經驗，一起建立正向的信仰社群
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* 左側邊欄 - 熱門話題 */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🔥 熱門話題</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {trendingTopics.map((topic) => (
                  <div key={topic.tag} className="flex justify-between items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                    <Badge className={topic.color}>{topic.tag}</Badge>
                    <span className="text-sm text-gray-500">{topic.count}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">⭐ 活躍用戶</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {topUsers.map((user, index) => (
                  <div key={user.name} className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full text-xs font-bold">
                      {index + 1}
                    </div>
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>{user.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.posts} 篇貼文</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* 主要內容區 */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="timeline" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="timeline">動態時間軸</TabsTrigger>
                <TabsTrigger value="wishes">許願牆</TabsTrigger>
                <TabsTrigger value="fortunes">籤詩分享</TabsTrigger>
                <TabsTrigger value="discussions">心得交流</TabsTrigger>
              </TabsList>

              <TabsContent value="timeline" className="mt-6">
                {/* 發文區 */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg">✨ 分享您的心得</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea 
                      placeholder="分享您的感謝、心得或許願..."
                      className="min-h-24"
                    />
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-pink-50">#愛情</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">#事業</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-green-50">#健康</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-yellow-50">#財運</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="anonymous" />
                        <label htmlFor="anonymous" className="text-sm">匿名發布</label>
                      </div>
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        📝 發布
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* 動態列表 */}
                <div className="space-y-4">
                  {mockPosts.map((post) => (
                    <Card key={post.id} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start space-x-3">
                          <Avatar>
                            <AvatarFallback>{post.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <p className="font-medium">{post.isAnonymous ? '匿名用戶' : post.user}</p>
                              <Badge className={getPostTypeColor(post.type)}>
                                {post.type}
                              </Badge>
                              <span className="text-2xl">{post.deityEmoji}</span>
                              <span className="text-sm text-gray-500">{post.deity}</span>
                            </div>
                            <p className="text-sm text-gray-500">{post.time}</p>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-gray-800 mb-3">{post.content}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <button className="flex items-center space-x-1 hover:text-red-600">
                            <span>❤️</span>
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-blue-600">
                            <span>💬</span>
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-green-600">
                            <span>🙏</span>
                            <span>為TA祈福</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-purple-600">
                            <span>📤</span>
                            <span>分享</span>
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="wishes" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>🌟 公開許願牆</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {mockPosts.filter(p => p.type === '許願').map((wish) => (
                        <Card key={`wish-${wish.id}`} className="border-l-4 border-yellow-400">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-2xl">{wish.deityEmoji}</span>
                              <span className="font-medium text-gray-800">{wish.deity}</span>
                              <Badge variant="outline">{wish.time}</Badge>
                            </div>
                            <p className="text-gray-700 mb-3">{wish.content}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                {wish.tags.map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <Button size="sm" variant="outline" className="text-amber-600 hover:bg-amber-50">
                                🙏 為TA祈福 ({wish.likes})
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="fortunes" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>📜 籤詩分享區</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockPosts.filter(p => p.type === '籤詩分享').map((post) => (
                        <Card key={`fortune-${post.id}`} className="bg-gradient-to-r from-yellow-50 to-amber-50">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3 mb-3">
                              <Avatar>
                                <AvatarFallback>{post.avatar}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{post.user}</p>
                                <p className="text-sm text-gray-600">諮詢 {post.deityEmoji} {post.deity}</p>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400 mb-3">
                              <p className="font-medium text-gray-800">{post.content}</p>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                {post.tags.map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex space-x-4 text-sm text-gray-500">
                                <span>❤️ {post.likes}</span>
                                <span>💬 {post.comments}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="discussions" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>🗣️ 心得交流討論區</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockPosts.filter(p => p.type === '心得分享').map((post) => (
                        <Card key={`discussion-${post.id}`}>
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-3">
                              <Avatar>
                                <AvatarFallback>{post.avatar}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <p className="font-medium">{post.user}</p>
                                  <span className="text-sm text-gray-500">{post.time}</span>
                                </div>
                                <p className="text-gray-800 mb-3">{post.content}</p>
                                <div className="flex items-center space-x-4">
                                  <div className="flex space-x-2">
                                    {post.tags.map((tag) => (
                                      <Badge key={tag} variant="outline" className="text-xs">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                  <div className="flex space-x-4 text-sm text-gray-500">
                                    <span>❤️ {post.likes}</span>
                                    <span>💬 {post.comments} 回覆</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}