import LoginPage from "../pageObjects/login.page";
import BurgerMenuComponent from "../pageObjects/components/burgerMenu.comp";
import CartButton from "../pageObjects/components/cartButton.comp";
import AddProductstoCart from "../pageObjects/add-products-to-cart.page";

describe('Validates all the options of the Burger Menu', async() => {
    beforeEach(async() => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await LoginPage.loginWebsite("standard_user","secret_sauce");
    });
    it('Validates All Items Link - Burger Menu', async() => {
        await BurgerMenuComponent.burgerMenu.click();
        await BurgerMenuComponent.allItemsLink.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    });
    it('Validates About Link - Burger Menu', async() => {
        await BurgerMenuComponent.burgerMenu.click();
        await BurgerMenuComponent.aboutLink.click();
        await expect(browser).toHaveUrl("https://saucelabs.com/");
    });
    it('Validates Logout Link - Burger Menu', async() => {
        await BurgerMenuComponent.burgerMenu.click();
        await BurgerMenuComponent.logoutLink.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    });
    it.only('Validates Reset App State Link - Burger Menu', async() => {
        await AddProductstoCart.addProductsToCart_CalculateTotal(4,0);
        await BurgerMenuComponent.burgerMenu.click();
        await BurgerMenuComponent.resetAppStateLink.click();
        await expect (CartButton.shoppingCartBadge).not.toBeDisplayed();
    });
});