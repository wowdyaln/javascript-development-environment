- 025 - Demo - Sharing Work-in-progress
localtunnel 非常實用。如果您有一堆設備要與本地託管的工作進行對比，那麼將 **Browsersync** 與**localtunnel** 結合起來是一個非常有吸引力的組合。

  `npm install localtunnel -g`

---
- 032 - Demo - Concurrent Tasks
  - npm run all來並行執行在右側列出的所有任務
`npm start -s`

  - 為了方便起見，我想同時運行任務。我想要一個啟動Web服務器的命令，並通過本地通道共享我的工作，這樣我就不必像前一個模塊那樣手動打開兩個獨立的終端。
`npm run share`

---
- 41 why bundle?

NPM 使用 commonJS模式； node 可以處理這個，但瀏覽器不理解它。
 因此，您需要將NPM軟件包 bundle 到瀏覽器可以使用的格式中。
bundler 不僅僅適用於在瀏覽器中運行的應用程序。
 您可以使用 bundler 將任何 JavaScript 打包到單個文件中。
 或策略性地將其分成不同的文件，用於您應用的不同部分。
 想像一下你已經創建了一個包含五個獨立頁面的應用程序。
 一個強大的打包程序可以為每個頁面智能地創建單獨的JavaScript包。
 **這樣，用戶只需在初始加載時下載第一頁的相關JavaScript。**
 這可節省帶寬並加快頁面加載速度。
  - improve Node performance
bundler 不僅僅適用於Web。
 如果您在 node 中進行編碼，則可能需要使用捆綁器，因為 node 的 require很慢。 您可以編譯require請求，這通常可以提高性能。
我們先考慮JavaScript中提供的各種模塊格式，包括AMD，CommonJS，UMD和ES6模塊。

node.js 可以繼續使用CommonJS。
 但是，如果您在ES6或更新版本的JavaScript中工作，您終於可以享受ES6 module的強大功能。**而對於未來的應用開發，我們應該選擇ES6 module**。

---




