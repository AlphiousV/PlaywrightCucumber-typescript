import BasePage from "./BasePage";
import {Page,expect} from "@playwright/test"
import dotenv from 'dotenv';
import AccountPage from "./AccountPage";



dotenv.config();


class SignInPage extends BasePage {
    url = '/auth/login'

    constructor(page:Page){
        super(page)
    }

    get LoginTitle()
    {
        return this.page.getByRole('heading', { name: 'Login' });
    }

    get LoginButton(){
         return this.page.getByRole('button', { name: 'Login' });
    }

    get EmailField()
    {
        return this.page.getByPlaceholder("Your email")
    }

    get PasswordField()
    {
        return this.page.getByPlaceholder("Your password")
    }

    
    async SignInWithCredential(email:string,password: string,lastName:string)
    {
       // let user = UserData();
        let Email:string =email
        let Password:string =password
        console.log("cerd", Email ,Password);
        await this.EmailField.fill(Email);
        await this.PasswordField.fill(Password);
        await this.LoginButton.click();
    }

    

    
}

export default SignInPage;