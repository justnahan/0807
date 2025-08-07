import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

function getSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables are not set. API will return empty data.')
    return null
  }
  return createClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = getSupabaseClient()

// 定義資料類型
export interface Merchant {
  id: string
  name: string
  base_product_url: string
}

export interface Product {
  id: string
  merchant_id: string
  name: string
  price_in_cents: number
  image_url: string | null
  product_url?: string | null  // 新增：完整產品 URL
  merchant?: Merchant
}

export interface VibeCoder {
  id: string
  github_username: string
  ref_code: string
}

// 許願牆相關資料結構
export interface Wish {
  id: string
  user_id?: string | null
  deity_id: string
  deity_name: string
  deity_emoji: string
  wish_content: string
  is_anonymous: boolean
  status: 'active' | 'fulfilled' | 'archived'
  created_at: string
  updated_at: string
  likes_count: number
  comments_count: number
  is_fulfilled: boolean
  fulfillment_story?: string | null
}

export interface WishInteraction {
  id: string
  wish_id: string
  user_id?: string | null
  interaction_type: 'like' | 'pray' | 'comment'
  comment_content?: string | null
  created_at: string
}

export interface CommunityStats {
  total_wishes: number
  fulfilled_wishes: number
  total_prayers: number
  active_users: number
  popular_deities: Array<{
    deity_id: string
    deity_name: string
    deity_emoji: string
    wish_count: number
  }>
}

// 輔助函數：生成 REF Link
export function generateRefLink(product: Product, refCode: string): string {
  // 優先使用 product_url
  if (product.product_url) {
    return `${product.product_url}?ref=${refCode}`
  }
  
  // fallback: 使用舊的邏輯（組合 base_url + id）
  if (!product.merchant) {
    throw new Error('Product must include merchant data or product_url')
  }
  return `${product.merchant.base_product_url}/${product.id}?ref=${refCode}`
}