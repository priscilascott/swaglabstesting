import LoginPage from "../pageObjects/login.page";

describe("Validates Login Page", async () => {
  beforeEach(async () => {
    await LoginPage.open();
    await browser.maximizeWindow();
  });
  it("Login with valid credentials - standard username", async () => {
    await LoginPage.loginWebsite("standard_user", "secret_sauce");
    await browser.url("https://www.saucedemo.com/inventory.html");
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  });
  it("Error - Username Incorrect", async () => {
    await LoginPage.loginWebsite("error_username", "secret_sauce");
    await expect(LoginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
  it("Error - Password Incorrect", async () => {
    await LoginPage.loginWebsite("standard_user","error_password");
    await expect(LoginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
  it("Error - Locked Password", async () => {
    await LoginPage.loginWebsite("locked_out_user","secret_sauce");
    await expect(LoginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
