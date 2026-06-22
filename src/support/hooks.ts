import { Before, BeforeAll,After,AfterAll } from '@cucumber/cucumber'
import { Browser,chromium } from '@playwright/test';
import customWorld from './world'
import dotenv from 'dotenv';

dotenv.config(); // Loads the variables into process.env

let Browser:Browser;

BeforeAll(async function () {
    Browser = await chromium.launch({
        headless:true,
        slowMo:5000


    
    });
})

Before(async function (this:customWorld) {
     this.Context = await Browser.newContext();
    this.Page = await this.Context.newPage();
    this.Page.setDefaultTimeout(15*1000)
    this.Page.setDefaultNavigationTimeout(1000*10);
    
})

After(async function(this:customWorld) {
    await this.Page.close();
    await this.Context?.close();
})

AfterAll(async function() {
    await Browser.close();
})