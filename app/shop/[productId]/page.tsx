import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { supabase, generateRefLink, type Product } from '@/lib/supabase'
import { getSmartRecommendations } from '@/lib/recommendations'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ProductDetailPageProps {
  params: Promise<{
    productId: string
  }>
}

async function getProduct(productId: string): Promise<Product | null> {
  try {
    if (!supabase) {
      console.warn('Supabase client is not initialized.')
      return null
    }
    
    const { data: product, error } = await supabase
      .from('products')
      .select('*, merchant:merchants(*)')
      .eq('id', productId)
      .single()
    
    if (error || !product) {
      console.error('Failed to fetch product:', error)
      return null
    }
    
    return product
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

async function getRecommendedProducts(currentProductId: string): Promise<Product[]> {
  try {
    // 使用智能推薦系統
    const recommendations = await getSmartRecommendations({
      currentProductId: currentProductId,
      // 可以根據商品類型推斷神明類型和問題類別
      // 這裡可以擴展更複雜的邏輯
    }, 4)
    
    return recommendations
  } catch (error) {
    console.error('Error fetching recommended products:', error)
    return []
  }
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { productId } = await params
  const product = await getProduct(productId)
  
  if (!product) {
    return {
      title: '商品不存在 - 線上寺廟',
      description: '抱歉，您查找的商品不存在。',
    }
  }
  
  return {
    title: `${product.name} - 祈福商城`,
    description: `神明加持的 ${product.name}，正品保證，靈驗有效。價格 NT$${Math.floor(product.price_in_cents / 100)}`,
    openGraph: {
      title: `${product.name} - 祈福商城`,
      description: `神明加持的 ${product.name}，正品保證，靈驗有效。`,
      images: product.image_url ? [product.image_url] : [],
    },
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { productId } = await params
  const product = await getProduct(productId)
  
  if (!product) {
    notFound()
  }
  
  const recommendedProducts = await getRecommendedProducts(productId)
  const refCode = process.env.REF_CODE || 'DEFAULT'
  const buyLink = generateRefLink(product, refCode)
  
  // 模擬的商品詳情數據（真實應用中這些會來自數據庫）
  const productDetails = {
    features: ['正品保證', '神明加持', '開運功效'],
    description: `這是一款經過神明加持的優質商品：${product.name}。採用傳統工藝製作，蘊含深厚的文化底蘊，為您帶來好運與祝福。`,
    specifications: [
      { label: '商品編號', value: product.id },
      { label: '商家', value: product.merchant?.name || '未知商家' },
      { label: '加持神明', value: '觀音菩薩' }, // 示例
      { label: '功效', value: '招財、開運、平安' }, // 示例
    ],
    reviews: [
      {
        id: 1,
        user: '信眾小明',
        rating: 5,
        comment: '非常靈驗！買了之後運勢真的變好了，推薦給大家！',
        date: '2024-01-15'
      },
      {
        id: 2,
        user: '虔誠信徒',
        rating: 5,
        comment: '品質很好，包裝精美，感覺到滿滿的加持能量。',
        date: '2024-01-10'
      },
      {
        id: 3,
        user: '幸運女神',
        rating: 4,
        comment: '收到商品很滿意，希望能帶來好運氣！',
        date: '2024-01-05'
      }
    ]
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* 麵包屑導航 */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-red-600">首頁</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-red-600">祈福商城</Link>
          <span>/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* 商品圖片區 */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
              {product.image_url ? (
                <img 
                  src={product.image_url} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-8xl">📦</span>
                </div>
              )}
            </div>
          </div>
          
          {/* 商品資訊區 */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                {productDetails.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="bg-red-50 text-red-600">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-4xl font-bold text-amber-600 mb-2">
                NT$ {Math.floor(product.price_in_cents / 100)}
              </p>
              <p className="text-gray-600">神明加持價，含加持費用</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">商品說明</h3>
              <p className="text-gray-700 leading-relaxed">
                {productDetails.description}
              </p>
            </div>
            
            {/* 購買選項 */}
            <div className="space-y-3">
              <Button asChild size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white">
                <a href={buyLink} target="_blank" rel="noopener noreferrer">
                  🛒 立即購買
                </a>
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg">
                  ❤️ 加入收藏
                </Button>
                <Button variant="outline" size="lg">
                  📤 分享商品
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="mb-12" />
        
        {/* 商品規格 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">📋 商品規格</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {productDetails.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* 神明加持說明 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">✨ 神明加持說明</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🙏</div>
                  <h3 className="font-bold mb-2">虔誠祈福</h3>
                  <p className="text-sm text-gray-600">
                    每件商品都經過專業法師虔誠祈福，注入正能量
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🕯️</div>
                  <h3 className="font-bold mb-2">神明加持</h3>
                  <p className="text-sm text-gray-600">
                    在神明面前進行加持儀式，確保每件商品都有靈性
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📿</div>
                  <h3 className="font-bold mb-2">開光儀式</h3>
                  <p className="text-sm text-gray-600">
                    完整的開光儀式，讓商品具有保護和開運的功效
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* 用戶評價 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">💬 用戶評價</h2>
          <div className="space-y-4">
            {productDetails.reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium">{review.user}</h4>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* 相關商品推薦 */}
        {recommendedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">🔮 其他信眾也購買</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {recommendedProducts.map((recProduct) => {
                const recBuyLink = generateRefLink(recProduct, refCode)
                
                return (
                  <Card key={recProduct.id} className="hover:shadow-lg transition-all duration-300">
                    <Link href={`/shop/${recProduct.id}`}>
                      <CardHeader className="pb-2">
                        <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                          {recProduct.image_url ? (
                            <img 
                              src={recProduct.image_url} 
                              alt={recProduct.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-3xl">📦</span>
                          )}
                        </div>
                        <CardTitle className="text-sm line-clamp-2">
                          {recProduct.name}
                        </CardTitle>
                      </CardHeader>
                    </Link>
                    <CardContent className="pt-0">
                      <p className="font-bold text-amber-600 mb-2">
                        NT$ {Math.floor(recProduct.price_in_cents / 100)}
                      </p>
                      <Button asChild size="sm" className="w-full" variant="outline">
                        <a href={recBuyLink} target="_blank" rel="noopener noreferrer">
                          立即購買
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}