import BasePage from "./BasePage";
import { expect, Page } from "@playwright/test";

class ShoppingPage extends BasePage{

    url:string = ''
    userName:string = '#menu'
    sort:string = 'sort'

    constructor(page: Page){
            super(page);
    }

    async checkSortDrop()
    {
        await this.page.getByTestId(this.sort).selectOption('name,asc');
        await expect(this.page.getByTestId(this.sort)).toHaveValue('name,asc')
    }
}








export default ShoppingPage;