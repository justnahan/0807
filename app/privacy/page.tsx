import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '隱私政策 - 線上寺廟',
  description: '了解我們如何收集、使用和保護您的個人資料。我們承諾保護每位信徒的隱私權益。',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      <header className="bg-gradient-to-r from-slate-600 to-gray-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🔒 隱私政策
          </h1>
          <p className="text-xl text-slate-100 max-w-2xl mx-auto">
            我們重視並保護每位信徒的隱私權益
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">📋 政策總覽</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                線上寺廟（以下簡稱「我們」或「本平台」）深知個人資料保護的重要性，
                並致力於保護所有使用者的隱私權。本隱私政策說明我們如何收集、使用、
                儲存和保護您的個人資料。使用我們的服務即表示您同意本隱私政策的條款。
              </p>
              <p className="text-sm text-gray-500 mt-4">
                最後更新日期：2025年8月7日
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">📊 資料收集</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">我們收集的資料類型：</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>基本資料：</strong>姓名、電子郵件、電話號碼</li>
                  <li><strong>帳戶資料：</strong>用戶名稱、密碼（加密存儲）</li>
                  <li><strong>問事記錄：</strong>您的問題、選擇的神明、獲得的籤詩</li>
                  <li><strong>互動資料：</strong>評論、分享、收藏等社群活動</li>
                  <li><strong>交易資料：</strong>訂單記錄、付款資訊、收貨地址</li>
                  <li><strong>技術資料：</strong>IP位址、瀏覽器類型、使用時間</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">資料收集方式：</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>您主動提供的資訊（註冊、問事、購物等）</li>
                  <li>自動收集的技術資訊（Cookies、日誌記錄等）</li>
                  <li>第三方整合服務（社群媒體登入、金流服務等）</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">🎯 資料使用目的</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">服務提供：</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>個人化問事體驗</li>
                    <li>籤詩推薦與解釋</li>
                    <li>願望追蹤與提醒</li>
                    <li>商品推薦服務</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">平台運營：</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>帳戶管理與驗證</li>
                    <li>訂單處理與配送</li>
                    <li>客戶服務支援</li>
                    <li>系統維護與優化</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">溝通聯繫：</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>重要通知發送</li>
                    <li>行銷活動資訊</li>
                    <li>問題回覆與解決</li>
                    <li>服務改進調查</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">法律合規：</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>遵守法律義務</li>
                    <li>防範詐欺行為</li>
                    <li>保護智慧財產權</li>
                    <li>解決法律糾紛</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">🛡️ 資料保護措施</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">技術保護：</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>SSL加密傳輸保護所有敏感資料</li>
                  <li>資料庫加密儲存，定期備份</li>
                  <li>多層防火牆與入侵檢測系統</li>
                  <li>定期安全漏洞掃描與修補</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">管理保護：</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>嚴格的存取權限控制</li>
                  <li>員工資安教育訓練</li>
                  <li>第三方資安認證與稽核</li>
                  <li>事件應變處理機制</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">🔄 資料分享與第三方</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">我們不會出售您的個人資料</h3>
                <p className="text-gray-700 text-sm">
                  我們承諾永不將您的個人資料出售給第三方。僅在以下必要情況下分享資料：
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">合理分享情況：</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>服務供應商：</strong>金流、物流、雲端服務等合作夥伴</li>
                  <li><strong>法律要求：</strong>配合執法機關調查或法院命令</li>
                  <li><strong>商業轉讓：</strong>企業合併、收購等業務轉移</li>
                  <li><strong>用戶同意：</strong>獲得您明確同意的特定用途</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">👤 您的權利</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">資料控制權：</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>查閱您的個人資料</li>
                    <li>修正錯誤或過時資料</li>
                    <li>刪除不需要的資料</li>
                    <li>限制特定用途處理</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">選擇權：</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>選擇接收的通知類型</li>
                    <li>控制資料分析參與程度</li>
                    <li>設定隱私偏好選項</li>
                    <li>隨時撤回同意</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>如何行使您的權利：</strong>
                  請透過客服信箱 privacy@temple.com 聯絡我們，
                  我們會在30天內回應您的要求。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">🍪 Cookies政策</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Cookie類型與用途：</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-700">必要性Cookie</h4>
                    <p className="text-sm text-gray-600">維持網站正常運作，無法停用</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">功能性Cookie</h4>
                    <p className="text-sm text-gray-600">記住您的偏好設定，提供個人化體驗</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">分析性Cookie</h4>
                    <p className="text-sm text-gray-600">了解網站使用情況，改進服務品質</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">行銷性Cookie</h4>
                    <p className="text-sm text-gray-600">提供相關廣告內容（可選擇停用）</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">⚖️ 政策變更</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                我們可能會不時更新本隱私政策，以反映法律變更、技術發展或服務改進。
                任何重大變更將透過網站公告或電子郵件通知您。
                繼續使用我們的服務即表示您接受修訂後的政策。
              </p>
              <p className="text-sm text-gray-500 mt-4">
                建議您定期查閱本政策，確保了解最新條款。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">📞 聯絡資訊</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                如果您對本隱私政策或資料處理有任何疑問，歡迎聯絡我們：
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>資料保護負責人：</strong>隱私事務專員</p>
                <p><strong>電子郵件：</strong>privacy@temple.com</p>
                <p><strong>服務時間：</strong>週一至週五 9:00-18:00</p>
                <p><strong>地址：</strong>線上寺廟資料保護部</p>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-800 text-sm">
                  我們承諾在收到您的隱私相關諮詢後，於48小時內初步回應，
                  並在30天內提供完整解答。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}