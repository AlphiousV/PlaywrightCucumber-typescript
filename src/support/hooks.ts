import { Before, BeforeAll,After,AfterAll } from '@cucumber/cucumber'
import { Browser,chromium } from '@playwright/test';
import customWorld from './world'
import dotenv from 'dotenv';

dotenv.config(); // Loads the variables into process.env

let Browser:Browser;

const isCI = !!process.env.CI;

BeforeAll(async function () {
       console.log("BeforeAll Started");

    Browser = await chromium.launch({
        headless:true,
        // slowMo:5000,
         args: isCI ? [
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--disable-blink-features=AutomationControlled',
    ] : [],
    });

      console.log("browser lauched Sucessfully");
})

Before(async function (this:customWorld) {
      console.log("Before Started");
                  // Inside your Before hook setup (usually where page and context are instantiated)
      this.Context = await Browser.newContext({
                   // 1. Emulate a standard Windows Desktop Chrome user agent
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    
                  // 2. Set a real window size (headless defaults to 0x0 or 800x600, which triggers blocks)
      viewport: { width: 1280, height: 720 },
    
                   // 3. Set standard locale details so the browser doesn't look empty
      locale: 'en-US',
      timezoneId: 'America/New_York',
      extraHTTPHeaders: {
        'Accept-Language': 'en-US,en;q=0.9',
                 }
      });
    this.Page = await this.Context.newPage();
    this.Page.setDefaultTimeout(90*1000)
    this.Page.setDefaultNavigationTimeout(1000*30);
      console.log("Before executed Sucessfully!");
})

After(async function(this:customWorld) {
       console.log("After Started");
    await this.Page.close();
    await this.Context?.close();
})

AfterAll(async function() {
     console.log("AfterAll Started");
    await Browser.close();
})