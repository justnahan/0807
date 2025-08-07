import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { generateRefLink } from '@/lib/supabase'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '祈福商城 - 線上寺廟',
  description: '各式神明加持的祈福商品，招財、開運、平安、姻緣應有盡有。正品保證，神明親自加持。',
}

interface Product {
  id: string
  merchant_id: string
  name: string
  price_in_cents: number
  image_url: string | null
  product_url?: string | null
  merchant?: {
    id: string
    name: string
    base_product_url: string
  }
}

async function getSelectedProducts(): Promise<Product[]> {
  try {
    // 從 selected-products.json 讀取商品 ID
    const selectedProductsFile = await import('@/selected-products.json')
    const productIds = selectedProductsFile.productIds || []
    
    // 從 API 獲取商品資料
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products?ids=${productIds.join(',')}`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      console.error('Failed to fetch products:', response.status)
      return []
    }
    
    const products = await response.json()
    return Array.isArray(products) ? products : []
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

const categories = [
  { id: 'all', name: '全部商品', emoji: '🛒', count: 0 },
  { id: 'yuelao', name: '月老專區', emoji: '💕', count: 0 },
  { id: 'wenchang', name: '文昌專區', emoji: '📚', count: 0 },
  { id: 'guanyin', name: '觀音專區', emoji: '🌸', count: 0 },
  { id: 'guandi', name: '關公專區', emoji: '⚔️', count: 0 },
  { id: 'mazu', name: '媽祖專區', emoji: '⛵', count: 0 },
  { id: 'caishen', name: '財神專區', emoji: '💰', count: 0 },
]

const mockProducts = [
  {
    id: 'mock-1',
    name: '月老紅繩手鍊',
    price_in_cents: 29900,
    image_url: null,
    emoji: '💝',
    category: 'yuelao',
    description: '月老親自加持的紅繩手鍊',
    deity: '月老司機',
    features: ['招桃花', '穩定感情', '姻緣美滿']
  },
  {
    id: 'mock-2', 
    name: '文昌開智筆',
    price_in_cents: 48800,
    image_url: null,
    emoji: '📝',
    category: 'wenchang',
    description: '文昌帝君加持的開智筆',
    deity: '文昌老師',
    features: ['考試順利', '智慧增長', '學業進步']
  },
  {
    id: 'mock-3',
    name: '觀音平安符',
    price_in_cents: 38800,
    image_url: null,
    emoji: '🧿',
    category: 'guanyin',
    description: '觀音菩薩慈悲加持的平安符',
    deity: '觀音媽咪', 
    features: ['身體健康', '平安順遂', '消災解厄']
  },
  {
    id: 'mock-4',
    name: '關公正義劍吊飾',
    price_in_cents: 58800,
    image_url: null,
    emoji: '🗡️',
    category: 'guandi',
    description: '關聖帝君加持的正義劍吊飾',
    deity: '關老大',
    features: ['明辨是非', '事業順利', '貴人相助']
  },
  {
    id: 'mock-5',
    name: '媽祖出行平安包',
    price_in_cents: 35800,
    image_url: null,
    emoji: '🎒',
    category: 'mazu',
    description: '媽祖娘娘加持的出行平安包',
    deity: '媽祖姐姐',
    features: ['旅途平安', '一路順風', '化險為夷']
  },
  {
    id: 'mock-6',
    name: '財神招財貓',
    price_in_cents: 68800,
    image_url: null,
    emoji: '🐱',
    category: 'caishen',
    description: '財神爺加持的招財貓',
    deity: '財神老闆',
    features: ['財運亨通', '生意興隆', '正偏財旺']
  }
]

export default async function ShopPage() {
  const realProducts = await getSelectedProducts()
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      {/* 頁面標題區 */}
      <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🛒 祈福商城
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            各式神明加持的祈福商品，為您帶來好運、平安與祝福
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 搜索和篩選區 */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input 
                placeholder="🔍 搜尋祈福商品..."
                className="h-12 text-lg"
              />
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8">
              搜尋
            </Button>
          </div>

          {/* 分類標籤 */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Badge
                key={category.id}
                variant="outline"
                className="cursor-pointer hover:bg-red-50 hover:border-red-300 px-4 py-2 text-sm"
              >
                {category.emoji} {category.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* 排序選項 */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            找到 <span className="font-bold">{mockProducts.length + realProducts.length}</span> 件商品
          </p>
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>綜合排序</option>
            <option>價格：低到高</option>
            <option>價格：高到低</option>
            <option>最新上架</option>
            <option>銷量最高</option>
            <option>評分最高</option>
          </select>
        </div>

        {/* 商品網格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* 真實商品 */}
          {realProducts.map((product) => {
            const refCode = process.env.REF_CODE || 'DEFAULT'
            const buyLink = generateRefLink(product, refCode)
            
            return (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-2">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                    {product.image_url ? (
                      <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-4xl">📦</span>
                    )}
                  </div>
                  <CardTitle className="text-sm line-clamp-2">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-2">正品保證</p>
                  <p className="font-bold text-lg text-amber-600 mb-3">
                    NT$ {Math.floor(product.price_in_cents / 100)}
                  </p>
                  <Button asChild size="sm" className="w-full">
                    <a href={buyLink} target="_blank" rel="noopener noreferrer">
                      立即購買
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}

          {/* 模擬商品 */}
          {mockProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="pb-2">
                <div className="aspect-square bg-gradient-to-br from-yellow-100 to-amber-200 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {product.emoji}
                  </span>
                </div>
                <CardTitle className="text-sm">{product.name}</CardTitle>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {product.deity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>

                <p className="font-bold text-lg text-amber-600 mb-3">
                  NT$ {Math.floor(product.price_in_cents / 100)}
                </p>

                <div className="space-y-2">
                  <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                    🛒 加入購物車
                  </Button>
                  <Button size="sm" variant="outline" className="w-full text-xs">
                    ❤️ 加入收藏
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 載入更多 */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            載入更多商品
          </Button>
        </div>

        {/* 購物說明 */}
        <section className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            🏯 購物說明
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-bold mb-2">神明加持</h3>
              <p className="text-sm text-gray-600">
                所有商品均經過對應神明的加持儀式，確保靈驗有效
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold mb-2">快速配送</h3>
              <p className="text-sm text-gray-600">
                全台灣 24 小時快速配送，讓您的祈願盡快實現
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold mb-2">品質保證</h3>
              <p className="text-sm text-gray-600">
                7 天無理由退換貨，購買無後顧之憂
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}