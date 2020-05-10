const puppeteer = require('puppeteer');

(async () => {
      const browser = await puppeteer.launch({
        // 运行 Chromium 或 Chrome 可执行文件的路径（相对路径）
        executablePath: '/private/var/folders/2h/nwrkhjj92z95n27_d67ndsnw0000gn/T/AppTranslocation/024D2117-D01C-4AB3-A4FA-D466D18B5790/d/Chromium.app/Contents/MacOS/Chromium', 
        headless: false
      });
      const page = await browser.newPage();
      await page.emulate(puppeteer.devices['iPhone 7'])
      await page.goto('https://www.google.com');
      await page.screenshot({path: 'screenshot.png'});
      browser.close();
})();