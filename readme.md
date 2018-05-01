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

- 049 - Sourcemaps

 一旦我們開始捆綁，縮小和編譯我們的代碼，我們就會產生一個新問題。
 當我們的代碼在瀏覽器中運行時，它變成了一個不可讀的混亂。
我該如何 debug ？另一個我們需要的重要工具：Sourcemaps。

生成一個源映射。Sourcemaps將捆綁，轉碼和縮小的代碼映射回原始源代碼。這意味著，當我們打開我們的瀏覽器開發工具並嘗試檢查我們的代碼時，我們會看到我們使用的原始ES6源代碼。這就像魔術一樣。源代碼可以作為我們構建過程的一部分自動生成。
您可能想知道如何縮小代碼實際上節省了任何帶寬，如果我們必須生成一個大的地圖回到原始來源。 源代碼的美妙之處在於，只有打開開發人員工具才能下載它們。
 因此，用戶甚至不會下載源代碼，但是在發生問題時，無論是在開發環境還是在生產環境中，它們都可供您使用。源代碼為您提供讀取原始代碼的所有好處，而不會給普通用戶帶來額外的成本。

 `devtool: 'inline-source-map'`
設置裡面這行，當我們在瀏覽器 debug， 可以看到原始碼，即使我們的代碼已經被轉換，捆綁和縮小之後。

---




