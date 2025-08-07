import { supabase, type Product } from '@/lib/supabase'

/**
 * 智能商品推薦系統
 * 提供多種推薦策略，包括基於問事內容、協同過濾和神明分類的推薦
 */

export interface RecommendationContext {
  currentProductId?: string
  deityType?: 'yuelao' | 'wenchang' | 'guanyin' | 'guandi' | 'mazu' | 'caishen'
  questionCategory?: 'love' | 'career' | 'health' | 'wealth' | 'study' | 'travel'
  userInterests?: string[]
  priceRange?: { min: number, max: number }
}

/**
 * 神明與商品類別的對應關係
 */
const deityProductMapping = {
  yuelao: ['love', 'relationship', 'marriage'], // 月老：愛情相關
  wenchang: ['study', 'exam', 'wisdom'], // 文昌：學業智慧
  guanyin: ['health', 'peace', 'protection'], // 觀音：健康平安
  guandi: ['justice', 'business', 'career'], // 關公：事業正義
  mazu: ['travel', 'safety', 'navigation'], // 媽祖：出行平安
  caishen: ['wealth', 'fortune', 'investment'] // 財神：財運事業
}

/**
 * 問事類別與神明的對應關係
 */
const questionDeityMapping = {
  love: 'yuelao',
  career: 'guandi',
  health: 'guanyin',
  wealth: 'caishen',
  study: 'wenchang',
  travel: 'mazu'
} as const

/**
 * 基於問事內容的商品推薦
 * @param questionCategory 問題類別
 * @param limit 推薦商品數量
 */
export async function getQuestionBasedRecommendations(
  questionCategory: RecommendationContext['questionCategory'],
  limit: number = 4
): Promise<Product[]> {
  try {
    if (!supabase || !questionCategory) {
      return []
    }

    const deity = questionDeityMapping[questionCategory]
    const productKeywords = deityProductMapping[deity] || []

    // 這裡應該根據商品描述或標籤來過濾
    // 由於資料結構限制，我們先返回隨機商品
    const { data: products, error } = await supabase
      .from('products')
      .select('*, merchant:merchants(*)')
      .limit(limit)

    if (error) {
      console.error('Failed to fetch question-based recommendations:', error)
      return []
    }

    return products || []
  } catch (error) {
    console.error('Error in getQuestionBasedRecommendations:', error)
    return []
  }
}

/**
 * 基於當前商品的相關推薦（協同過濾）
 * @param currentProductId 當前商品ID
 * @param limit 推薦商品數量
 */
export async function getRelatedProducts(
  currentProductId: string,
  limit: number = 4
): Promise<Product[]> {
  try {
    if (!supabase) {
      return []
    }

    // 獲取除了當前商品以外的其他商品
    const { data: products, error } = await supabase
      .from('products')
      .select('*, merchant:merchants(*)')
      .neq('id', currentProductId)
      .limit(limit)

    if (error) {
      console.error('Failed to fetch related products:', error)
      return []
    }

    return products || []
  } catch (error) {
    console.error('Error in getRelatedProducts:', error)
    return []
  }
}

/**
 * 基於神明類型的專屬商品推薦
 * @param deityType 神明類型
 * @param limit 推薦商品數量
 */
export async function getDeitySpecificProducts(
  deityType: RecommendationContext['deityType'],
  limit: number = 6
): Promise<Product[]> {
  try {
    if (!supabase || !deityType) {
      return []
    }

    // 這裡應該根據商品的神明標籤來過濾
    // 由於資料結構限制，我們先返回一般商品
    const { data: products, error } = await supabase
      .from('products')
      .select('*, merchant:merchants(*)')
      .limit(limit)

    if (error) {
      console.error('Failed to fetch deity-specific products:', error)
      return []
    }

    return products || []
  } catch (error) {
    console.error('Error in getDeitySpecificProducts:', error)
    return []
  }
}

/**
 * 熱門商品推薦（基於銷量或評分）
 * @param limit 推薦商品數量
 */
export async function getPopularProducts(limit: number = 6): Promise<Product[]> {
  try {
    if (!supabase) {
      return []
    }

    // 獲取所有商品（實際應用中應該按銷量或評分排序）
    const { data: products, error } = await supabase
      .from('products')
      .select('*, merchant:merchants(*)')
      .limit(limit)

    if (error) {
      console.error('Failed to fetch popular products:', error)
      return []
    }

    return products || []
  } catch (error) {
    console.error('Error in getPopularProducts:', error)
    return []
  }
}

/**
 * 綜合推薦系統 - 根據上下文提供最適合的推薦
 * @param context 推薦上下文
 * @param limit 推薦商品數量
 */
export async function getSmartRecommendations(
  context: RecommendationContext,
  limit: number = 4
): Promise<Product[]> {
  try {
    // 優先級：問事類別 > 神明類型 > 當前商品 > 熱門商品
    if (context.questionCategory) {
      return await getQuestionBasedRecommendations(context.questionCategory, limit)
    }
    
    if (context.deityType) {
      return await getDeitySpecificProducts(context.deityType, limit)
    }
    
    if (context.currentProductId) {
      return await getRelatedProducts(context.currentProductId, limit)
    }
    
    return await getPopularProducts(limit)
  } catch (error) {
    console.error('Error in getSmartRecommendations:', error)
    return []
  }
}

/**
 * 神明套裝組合推薦
 * @param deityType 神明類型
 * @param packageSize 套裝商品數量
 */
export async function getDeityPackageRecommendations(
  deityType: RecommendationContext['deityType'],
  packageSize: number = 3
): Promise<Product[]> {
  try {
    if (!supabase || !deityType) {
      return []
    }

    // 獲取該神明相關的商品組合
    const products = await getDeitySpecificProducts(deityType, packageSize)
    
    return products
  } catch (error) {
    console.error('Error in getDeityPackageRecommendations:', error)
    return []
  }
}

/**
 * 獲取神明的中文名稱
 */
export function getDeityName(deityType: RecommendationContext['deityType']): string {
  const deityNames = {
    yuelao: '月老司機',
    wenchang: '文昌老師',
    guanyin: '觀音媽咪',
    guandi: '關老大',
    mazu: '媽祖姐姐',
    caishen: '財神老闆'
  }
  
  return deityType ? deityNames[deityType] : '神明'
}

/**
 * 獲取問事類別的中文描述
 */
export function getQuestionCategoryName(category: RecommendationContext['questionCategory']): string {
  const categoryNames = {
    love: '愛情姻緣',
    career: '事業發展',
    health: '健康平安',
    wealth: '財運事業',
    study: '學業考試',
    travel: '出行平安'
  }
  
  return category ? categoryNames[category] : '一般問題'
}