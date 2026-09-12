/**
 * 台灣道家拍打保健協會｜加入會員表單接收程式
 *
 * 部署方式：
 * 1. 開一個新的 Google Sheet（例如命名「台灣道家拍打保健協會_會員名冊」）。
 * 2. 第一列（A1:K1）填入表頭：
 *    時間戳記 / 類別 / 姓名 / 性別 / 生日 / 電話 / 地址 / Email / 匯款金額 / 匯款後五碼 / 想對協會說的話
 * 3. 上方選單「擴充功能」→「Apps Script」，把這個檔案的內容整段貼上（取代預設內容），儲存。
 * 4. 點右上角「部署」→「新增部署作業」：
 *    - 類型選擇「網頁應用程式」
 *    - 執行身份：我
 *    - 誰可以存取：所有人
 * 5. 部署後會拿到一個網址，格式類似：
 *    https://script.google.com/macros/s/AKfycb.../exec
 * 6. 把這個網址貼到 index.html 裡的 MEMBER_FORM_ENDPOINT 常數。
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var p = e.parameter;

  sheet.appendRow([
    new Date(),
    p.type || '',
    p.name || '',
    p.gender || '',
    p.birthday || '',
    p.phone || '',
    p.address || '',
    p.email || '',
    p.amount || '',
    p.last5 || '',
    p.message || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
