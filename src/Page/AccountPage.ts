import BasePage from "./BasePage";
import {Page} from "@playwright/test"

class AccountPage extends BasePage {

    url:string = '/account'

    constructor(page:Page)
    {
        super(page)
    }

    async  HomePage()
    {
        await this.page.getByText('Home').click();
    }


}

export default AccountPage;