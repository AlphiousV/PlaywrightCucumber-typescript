import { setWorldConstructor } from "@cucumber/cucumber";
import {Page,BrowserContext } from "@playwright/test";
import RegisterPage from "../Page/RegisterPage";
import SignInPage from "../Page/SignInPage";
import AccountPage from "../Page/AccountPage";


class customWorld{
    Context!: BrowserContext;
    Page!:Page;
    RegisterPage!:RegisterPage;
    SignInPage! :SignInPage;
    AccountPage!:AccountPage;

}

setWorldConstructor(customWorld);

export default customWorld
