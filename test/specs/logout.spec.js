import LoginPage from "../pageObjects/login.page";
import BurgerMenuComponent from "../pageObjects/components/burgerMenu.comp";

describe("Logout of the website", async () => {
  beforeEach(async () => {
    await LoginPage.open();
    await browser.maximizeWindow();
  });
  it("Logout of the website", async () => {
    //Login
    await LoginPage.loginWebsite("standard_user", "secret_sauce");
    //Logout
    await BurgerMenuComponent.burgerMenu.click();
    await BurgerMenuComponent.logoutLink.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
  });
});
