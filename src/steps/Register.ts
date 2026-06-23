import { Given, When, Then, setDefaultTimeout, DataTable } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import customWorld from "../support/world";
import RegisterPage from "../Page/RegisterPage";
import SignInPage from "../Page/SignInPage";
import { logger } from "../support/logger";

setDefaultTimeout(60 * 1000 * 2);

Given('User navigates to the registration page', async function (this: customWorld) {
  this.RegisterPage = new RegisterPage(this.Page);
  await this.RegisterPage.navigateTo(this.RegisterPage.url);
  await expect(this.RegisterPage.RegisterTitle).toBeVisible();
  logger.info('>>> Registration page loaded successfully');
});

When('User enters valid registration details', async function (this: customWorld, dataTable: DataTable) {
  logger.info('>>> STEP: Entering registration details'); 
  const data = dataTable.rowsHash();
  logger.info(`>>> Test data: ${JSON.stringify(data)}`); // ← see data in terminal
  await this.RegisterPage.RegisterNewUser(data.FirstName,data.LastName,data.DOB,data.Country,data.Postal,data.HouseNumber,data.Phone,data.Email,data.Password)
});

When('User clicks Register buttons', async function (this: customWorld) {
  logger.info('>>> STEP: Clicking register button'); // ← was missing this:customWorld
  this.RegisterPage = new RegisterPage(this.Page);
  await this.RegisterPage.ClickRegisterButton();
});

Then('Registration should be successful', async function (this: customWorld) {
  logger.info('>>> STEP: Verifying registration success');
  this.SignInPage = new SignInPage(this.Page);
  const SigninURL = this.SignInPage.baseUrl+this.SignInPage.url;
  console.log(SigninURL)
  await expect(this.Page).toHaveURL(SigninURL);

});
