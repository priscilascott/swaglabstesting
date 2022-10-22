import AddProductsToCart from "../pageObjects/add-products-to-cart.page";

class YourCart{
    get yourCartHeader(){
        return $(".title");
      }
    get yourCartPage_ContinueShoppingButton(){
      return $("button#continue-shopping");
    }
    get yourCartPage_checkoutButton() {
      return $("button#checkout");
    }

    async checkoutProductsSelected() {
      if (
        AddProductsToCart.productNameHeader[0] === "Sauce Labs Backpack" ||
        AddProductsToCart.productNameHeader[1] === "Sauce Labs Backpack"
      ) {
        await expect(AddProductsToCart.sauceLabsBackpackSelector).toHaveTextContaining(
          "Sauce Labs Backpack"
        );
        await expect(AddProductsToCart.sauceLabsBackpack_PriceSelector).toHaveText("$29.99");
      }
      if (
        AddProductsToCart.productNameHeader[0] === "Sauce Labs Bike Light" ||
        AddProductsToCart.productNameHeader[1] === "Sauce Labs Bike Light"
      ) {
        await expect(AddProductsToCart.sauceLabsBikeLightSelector).toHaveTextContaining(
          "Sauce Labs Bike Light"
        );
        await expect(AddProductsToCart.sauceLabsBikeLigh_PriceSelector).toHaveText("$9.99");
      }
      if (
        AddProductsToCart.productNameHeader[0] === "Sauce Labs Bolt T-Shirt" ||
        AddProductsToCart.productNameHeader[1] === "Sauce Labs Bolt T-Shirt"
      ) {
        await expect(AddProductsToCart.sauceLabsBoltTshirt).toHaveTextContaining(
          "Sauce Labs Bolt T-Shirt"
        );
        await expect(AddProductsToCart.sauceLabsBoltTshirt_PriceSelector).toHaveText("$15.99");
      }
      if (
        AddProductsToCart.productNameHeader[0] === "Sauce Labs Fleece Jacket" ||
        AddProductsToCart.productNameHeader[1] === "Sauce Labs Fleece Jacket"
      ) {
        await expect(AddProductsToCart.sauceLabsFleeceJacket).toHaveTextContaining(
          "Sauce Labs Fleece Jacket"
        );
        await expect(AddProductsToCart.sauceLabsFleeceJacket_PriceSelector).toHaveText(
          "$49.99"
        );
      }
      if (
        AddProductsToCart.productNameHeader[0] === "Sauce Labs Onesie" ||
        AddProductsToCart.productNameHeader[1] === "Sauce Labs Onesie"
      ) {
        await expect(AddProductsToCart.sauceLabsOnesie).toHaveTextContaining(
          "Sauce Labs Onesie"
        );
        await expect(AddProductsToCart.sauceLabsOnesie_PriceSelector).toHaveText("$7.99");
      }
      if (
        AddProductsToCart.productNameHeader[0] === "Test.allTheThings() T-Shirt (Red)" ||
        AddProductsToCart.productNameHeader[1] === "Test.allTheThings() T-Shirt (Red)"
      ) {
        await expect(AddProductsToCart.testAllTheThingsTShirt).toHaveTextContaining(
          "Test.allTheThings() T-Shirt (Red)"
        );
        await expect(AddProductsToCart.testAllTheThingsTShirt_PriceSelector).toHaveText(
          "$15.99"
        );
      }
    }
}

export default new YourCart();