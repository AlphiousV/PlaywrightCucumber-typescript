import { Given, When, Then, setDefaultTimeout, DataTable } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import customWorld from "../support/world";
import SignInPage from "../Page/SignInPage";
import AccountPage from "../Page/AccountPage";
import { logger } from "../support/logger";

setDefaultTimeout(60 * 1000 * 2);

Given('user Navigate to Login Page' , async function (this: customWorld) {
  logger.info('>>> SignIn page loaded successfully');
  this.SignInPage = new SignInPage(this.Page);
  await this.SignInPage.navigateTo(this.SignInPage.url);
 
});


When('user enter valid Credential', async function (this: customWorld, dataTable: DataTable) {
  logger.info('>>> STEP: Entering SignIn Credential details'); 
  const data = dataTable.rowsHash();
  logger.info(`>>> Test data: ${JSON.stringify(data)}`); // ← see data in terminal
  await this.SignInPage.SignInWithCredential(data.Email,data.Password,data.LastName)
});


Then('It Should Land on AccountPage successful', async function (this: customWorld) {
  logger.info('>>> STEP: Verifying Signed In success');
  this.AccountPage = new AccountPage(this.Page);
  const AccountURL = this.AccountPage.baseUrl+this.AccountPage.url;
  console.log(AccountURL)
  await expect(this.Page).toHaveURL(AccountURL);


});
