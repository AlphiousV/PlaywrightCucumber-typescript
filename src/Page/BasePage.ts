import {expect, Page}   from '@playwright/test'; 
import { logger } from '../support/logger';

class BasePage{
     baseUrl: string  = 'https://practicesoftwaretesting.com'
     title: string = 'Practice Software Testing - Toolshop - v5.0'
    protected readonly page: Page;
    
   constructor( page: Page){
    this.page = page;
   }
   

    async navigateTo(endpoint: string):Promise<void>{
         const fullUrl = `${this.baseUrl}${endpoint}`;
        logger.info(`Navigating to URL: ${fullUrl}`);
        await this.page.goto(fullUrl,{waitUntil:"domcontentloaded"});
        
    }

     headersection(){
         return this.page.locator('app-header');
    }

    foodersection(){
        return this.page.locator('app-footer');
    }

    Logo(){
        return this.page.locator("svg[id$='Layer_1']");
    }

    get SignInButton ()
    {
        return this.page.getByRole('link', { name: 'Sign in' });
    }
    
    
}

export default BasePage;