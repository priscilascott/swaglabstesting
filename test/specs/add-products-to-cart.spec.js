import LoginPage from "../pageObjects/login.page";
import AddProductstoCart from "../pageObjects/add-products-to-cart.page";
import CartButton from "../pageObjects/components/cartButton.comp";
import YourCart from "../pageObjects/your-cart.page";
import YourInformation from "../pageObjects/your-information.page";
import Overview from "../pageObjects/overview.page"
import CheckoutComplete from "../pageObjects/checkout-complete.page";
import RemoveProductsFromCart from "../pageObjects/remove-products-from-cart.page";

describe('Validates the steps to add products to the cart, calculates total and checkout', async() => {
    beforeEach(async() => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await LoginPage.loginWebsite("standard_user","secret_sauce");
    });
    it('Valid Test - Add products to the basket', async() => {
        await AddProductstoCart.addProductsToCart_CalculateTotal(4,0);
        await CartButton.cartButton.click();
        await YourCart.checkoutProductsSelected();
        await YourCart.yourCartPage_checkoutButton.click();
        await YourInformation.addYourInformationToCheckout();
        await YourInformation.continueButton.click();
        await Overview.addAssertionsCheckoutOverviewPage();
        await Overview.finishButton.click();
        await CheckoutComplete.addAssertionsCheckoutCompletePage();
    });
    //Cancel Button
    it('Valid Test - Validates "Cancel" button: Your Cart Page', async() => {
        await AddProductstoCart.addProductsToCart_CalculateTotal(4,0);
        await CartButton.cartButton.click();
        await YourCart.yourCartPage_ContinueShoppingButton.click();
        await expect(AddProductstoCart.productsHeader).toHaveText("PRODUCTS");
    });
    it('Valid Test - "Cancel" button: Checkout Your Info. Page', async() => {
        await AddProductstoCart.addProductsToCart_CalculateTotal(4,0);
        await CartButton.cartButton.click();
        await YourCart.yourCartPage_checkoutButton.click();
        await YourInformation.checkoutYourInfoPage_CancelButton.click();
        await expect(YourCart.yourCartHeader).toHaveText("YOUR CART");
    });
    it('Valid Test - "Cancel" button: Checkout Overview Page', async() => {
        await AddProductstoCart.addProductsToCart_CalculateTotal(4,0);
        await CartButton.cartButton.click();
        await YourCart.yourCartPage_checkoutButton.click();
        await YourInformation.addYourInformationToCheckout();
        await YourInformation.continueButton.click();
        await Overview.checkoutOverviewPage_CancelButton.click();
        await expect(AddProductstoCart.productsHeader).toHaveText("PRODUCTS");
        await browser.pause(3000);
    });
    it('Valid test - Removes items from the basket - Inventory Page', async() => {
        await AddProductstoCart.addProductsToCart_CalculateTotal(3,0);
        await RemoveProductsFromCart.removeProductsFromCart(3,0);
    });
    it('Valid test - Removes item from the basket - Your Cart Page', async() => {
        await AddProductstoCart.addProductsToCart_CalculateTotal(4,0)
        await CartButton.cartButton.click();
        await RemoveProductsFromCart.removeProductsFromCart(4,0);
    });
    //Open an item to check description
    //Break the functions page into more page.js files.
    //Allure Reports
});