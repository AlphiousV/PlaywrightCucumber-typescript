import BasePage from "./BasePage";
import {Page}   from '@playwright/test';



class RegisterPage extends BasePage{
     url: string = '/auth/register';

    constructor(page: Page){
        super(page);
     }

     get RegistrationLink (){
          return this.page.getByRole('link', { name: 'Register your account' });
     }



     get RegisterTitle() {
          return this.page.getByText('Customer registration');
     }

     async RegisterNewUser(firstName: string,lastName:string,dateOfbirth:string,country:string,postal:string,housenumber:string,phone:string,email:string,password:string){
          
          await this.page.locator('#first_name').fill(firstName);
          await this.page.locator('#last_name').fill(lastName);
          await this.page.locator('#dob').fill(String(dateOfbirth));
          await this.page.locator('#country').selectOption(String(country));
          await this.page.locator('#postal_code').fill(String(postal));
          await this.page.locator('#house_number').fill(String(housenumber));
          await this.page.locator('#phone').fill(String(phone));
          await this.page.locator('#email').fill(email);
          await this.page.locator('#password').fill(password);
         
     }    

     async ClickRegisterButton() {
           await this.page.getByRole('button',{name:'Register '}).click();
     }

         

}

export default RegisterPage;