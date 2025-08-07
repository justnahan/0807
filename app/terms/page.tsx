import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '服務條款 - 線上寺廟',
  description: '了解使用線上寺廟服務的相關條款與規範。請仔細閱讀並遵守我們的使用條款。',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      <header className="bg-gradient-to-r from-gray-700 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            📜 服務條款
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            使用線上寺廟服務前，請仔細閱讀以下條款
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">📋 條款總覽</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                歡迎使用線上寺廟（以下簡稱「本平台」或「我們」）！
                這些服務條款（「條款」）規範您使用我們網站和服務的權利與義務。
                使用我們的服務即表示您同意遵守這些條款。
                如果您不同意任何條款，請勿使用我們的服務。
              </p>
              <p className="text-sm text-gray-500 mt-4">
                最後更新日期：2025年8月7日<br />
                生效日期：2025年8月7日
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">✅ 服務接受與資格</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">使用資格</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>您必須年滿18歲，或在父母/監護人同意下使用</li>
                  <li>您必須具有法律行為能力</li>
                  <li>您不得被任何司法管轄區禁止使用類似服務</li>
                  <li>您提供的所有資訊必須真實、準確且完整</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">帳戶責任</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>您有責任維護帳戶安全，保護密碼不被洩露</li>
                  <li>您須對帳戶下的所有活動負責</li>
                  <li>如發現帳戶被盜用，請立即通知我們</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">🔮 服務內容與限制</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">問事服務說明</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>問事服務基於傳統文化與AI技術結合，僅供參考</li>
                  <li>籤詩結果不應作為重大決策的唯一依據</li>
                  <li>我們不保證籤詩的準確性或未來預測的實現</li>
                  <li>使用者應理性看待問事結果，保持獨立思考</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">服務可用性</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>我們努力提供24/7不間斷服務，但不保證100%可用性</li>
                  <li>可能因維護、更新或不可抗力因素暫停服務</li>
                  <li>我們保留隨時修改、暫停或終止服務的權利</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">使用限制</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>禁止利用服務進行違法活動</li>
                  <li>禁止散布虛假、誤導或有害資訊</li>
                  <li>禁止侵犯他人智慧財產權或隱私權</li>
                  <li>禁止濫用系統資源或嘗試破壞服務</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">🛒 商品與交易</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">商品資訊</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>所有商品描述、圖片僅供參考，實物可能略有差異</li>
                  <li>商品價格可能隨時調整，以結帳時顯示為準</li>
                  <li>庫存數量有限，採先訂先得原則</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">訂單與付款</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>訂單成立後，我們會發送確認通知</li>
                  <li>如商品缺貨，我們會主動通知並協助退款</li>
                  <li>付款完成前，訂單可能被取消</li>
                  <li>所有價格均含稅，另加運費（如適用）</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">配送與退換貨</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>配送時間僅供參考，可能因外在因素延誤</li>
                  <li>提供7天無理由退換貨（特殊商品除外）</li>
                  <li>退貨商品須保持原包裝完整</li>
                  <li>已開光或個人化商品可能無法退貨</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">💬 用戶生成內容</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">內容規範</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>您發布的內容必須真實、合法且不侵犯他人權利</li>
                  <li>禁止發布仇恨言論、騷擾或威脅性內容</li>
                  <li>禁止發布色情、暴力或其他不當內容</li>
                  <li>禁止發布商業廣告或垃圾訊息</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">內容授權</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>您授權我們使用、編輯、展示您發布的內容</li>
                  <li>您保留內容的所有權，但授予我們非專屬使用權</li>
                  <li>我們可能移除違反規範的內容，恕不另行通知</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">⚖️ 智慧財產權</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">平台權利</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>本平台的所有內容、設計、商標均受著作權保護</li>
                  <li>未經授權不得複製、修改或商業使用</li>
                  <li>「線上寺廟」及相關標誌為我們的註冊商標</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">侵權處理</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>如發現侵權行為，請立即通知我們</li>
                  <li>我們會依法處理侵權投訴</li>
                  <li>重複侵權者可能被終止服務</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">🚫 責任限制</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">服務性質聲明</h3>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800 text-sm">
                    <strong>重要提醒：</strong>
                    線上寺廟提供的問事服務基於傳統文化與現代技術結合，
                    主要目的為娛樂和心靈慰藉，不應作為專業諮詢或重大決策的依據。
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">責任限制範圍</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>我們不對籤詩準確性或預測實現承擔責任</li>
                  <li>不對因使用服務造成的任何損失負責</li>
                  <li>不對第三方內容或連結的準確性負責</li>
                  <li>不對服務中斷或資料遺失承擔責任</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">賠償限額</h3>
                <p className="text-gray-700">
                  在任何情況下，我們的總責任不超過您在過去12個月內支付給我們的費用總額。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">⚡ 服務終止</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">終止條件</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>您可隨時停止使用服務並刪除帳戶</li>
                  <li>我們可因您違反條款而終止您的服務</li>
                  <li>我們可因商業考量終止部分或全部服務</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">終止後果</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>您將失去對帳戶和內容的存取權</li>
                  <li>我們可能刪除您的帳戶資料</li>
                  <li>未完成的交易將依相關規定處理</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">🌍 適用法律與爭議解決</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">適用法律</h3>
                <p className="text-gray-700">
                  本條款受中華民國法律管轄，如有爭議，
                  雙方同意以台灣台北地方法院為第一審管轄法院。
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">爭議處理</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>優先透過友善協商解決爭議</li>
                  <li>可申請消費者保護相關救濟</li>
                  <li>必要時透過法律途徑解決</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">📝 條款修改</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">修改權利</h3>
                <p className="text-gray-700">
                  我們保留隨時修改這些條款的權利。
                  重大修改將透過網站公告或電子郵件通知您。
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">生效時間</h3>
                <p className="text-gray-700">
                  修改後的條款在發布後立即生效。
                  繼續使用服務即表示您接受修改後的條款。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">📞 聯絡資訊</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                如果您對這些服務條款有任何疑問，請聯絡我們：
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>法務部門：</strong>服務條款專員</p>
                <p><strong>電子郵件：</strong>legal@temple.com</p>
                <p><strong>客服信箱：</strong>support@temple.com</p>
                <p><strong>服務時間：</strong>24小時全天候服務</p>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>感謝您使用線上寺廟！</strong><br />
                  我們致力於為您提供優質的服務體驗。
                  如有任何建議或問題，歡迎隨時與我們聯繫。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}