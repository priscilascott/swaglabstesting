import LoginPage from "../pageObjects/login.page";
import AddProductstoCart from "../pageObjects/add-products-to-cart.page";
import CartButton from "../pageObjects/components/cartButton.comp";

describe('Validates the steps to add products to the cart, calculates total and checkout', async() => {
    beforeEach(async() => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await LoginPage.loginWebsite("standard_user","secret_sauce");
    });
    it('Valid Test - Add products to the basket', async() => {
        await AddProductstoCart.addProductsToCart_CalculateTotal(4,0);
        await CartButton.cartButton.click();
        await AddProductstoCart.checkoutProductsSelected();
        await AddProductstoCart.checkoutButton.click();
        await AddProductstoCart.addYourInformationToCheckout();
        await AddProductstoCart.continueButton.click();
        await AddProductstoCart.addAssertionsCheckoutOverviewPage();
        await AddProductstoCart.finishButton.click();
        await AddProductstoCart.addAssertionsCheckoutCompletePage();
    });
    //Cancel Button
    it('Valid Test - Validates "Cancel" button: Your Cart Page', async() => {
        await AddProductstoCart.addProductsToCart_CalculateTotal(4,0);
        await CartButton.cartButton.click();
        await AddProductstoCart.yourCartPage_ContinueShoppingButton.click();
        await expect(AddProductstoCart.productsHeader).toHaveText("PRODUCTS");
    });
    it('Valid Test - "Cancel" button: Checkout Your Info. Page', async() => {
        await AddProductstoCart.addProductsToCart_CalculateTotal(4,0);
        await CartButton.cartButton.click();
        await AddProductstoCart.checkoutButton.click();
        await AddProductstoCart.checkoutYourInfoPage_CancelButton.click();
        await expect(AddProductstoCart.yourCartHeader).toHaveText("YOUR CART");
    });
    it('Valid Test - "Cancel" button: Checkout Overview Page', async() => {
        await AddProductstoCart.addProductsToCart_CalculateTotal(4,0);
        await CartButton.cartButton.click();
        await AddProductstoCart.checkoutButton.click();
        await AddProductstoCart.addYourInformationToCheckout();
        await AddProductstoCart.continueButton.click();
        await AddProductstoCart.checkoutOverviewPage_CancelButton.click();
        await expect(AddProductstoCart.productsHeader).toHaveText("PRODUCTS");
        await browser.pause(3000);
    });
    it('Valid test - Removes an item from the basket', async() => {
        await AddProductstoCart.addProductsToCart_CalculateTotal(3,0);
        await AddProductstoCart.removeProductsFromCart(3,0);
        await browser.pause(5000);
    });

    //Open an item to check description
    //Break the functions page into more page.js files.
    //Allure Reports
});