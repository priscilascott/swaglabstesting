

class AddProductstoCart {
  constructor() {
    this.productNameHeader = [];
    this.priceSubTotal;
    this.priceTotal;
    this.feeValue;
  }

  //Products & Prices Selectors:
  get sauceLabsBackpackSelector() {
    return $("#item_4_title_link");
  }
  get sauceLabsBikeLightSelector() {
    return $("#item_0_title_link");
  }
  get sauceLabsBoltTshirt() {
    return $("#item_1_title_link");
  }
  get sauceLabsFleeceJacket() {
    return $("#item_5_title_link");
  }
  get sauceLabsOnesie() {
    return $("#item_2_title_link");
  }
  get testAllTheThingsTShirt() {
    return $("#item_3_title_link");
  }
  get sauceLabsBackpack_PriceSelector() {
    return $("div:nth-of-type(3) .inventory_item_price");
  }
  get sauceLabsBikeLigh_PriceSelector() {
    return $(".cart_list .cart_item:nth-of-type(4) .inventory_item_price");
  }
  get sauceLabsFleeceJacket_PriceSelector() {
    return $("div:nth-of-type(3) .inventory_item_price");
  }
  get testAllTheThingsTShirt_PriceSelector() {
    return $("div:nth-of-type(4) .inventory_item_price");
  }
  get sauceLabsBoltTshirt_PriceSelector() {
    return $("div:nth-of-type(7) .inventory_item_price");
  }
  get sauceLabsOnesie_PriceSelector() {
    return $("div:nth-of-type(8) .inventory_item_price");
  }
  get checkoutButton() {
    return $("button#checkout");
  }
  //Checkout: Your Information Page
  get checkoutYourInformationHeader() {
    return $(".title");
  }
  get inputFirstName() {
    return $("input#first-name");
  }
  get inputLastName() {
    return $("input#last-name");
  }
  get inputPostalCode() {
    return $("input#postal-code");
  }
  get continueButton() {
    return $("input#continue");
  }
  //Checkout Overview Page:
  get checkoutOverviewHeader() {
    return $("//div[@id='header_container']//span[@class='title']");
  }
  get paymentInformationSauceCard() {
    return $(".summary_info > div:nth-of-type(2)");
  }
  get shippingInformationFreePonyDelivery() {
    return $(".summary_info > div:nth-of-type(4)");
  }
  get subtotalLabel() {
    return $(".summary_subtotal_label");
  }
  get taxLabel() {
    return $(".summary_tax_label");
  }
  get totalLabel() {
    return $(".summary_total_label");
  }
  get finishButton() {
    return $("button#finish");
  }
  get checkoutOverviewPage_CancelButton(){
    return $("button#cancel");
  }
  //Checkout Complete Page
  get checkoutComplete_PrimaryHeaderTitle() {
    return $(".title");
  }
  get checkoutComplete_SecondaryHeaderTitle() {
    return $("div#checkout_complete_container > .complete-header");
  }
  get checkoutComplete_Text() {
    return $("div#checkout_complete_container > .complete-text");
  }
  //Cancel Buttons
  get yourCartPage_ContinueShoppingButton(){
    return $("button#continue-shopping");
  }
  get checkoutYourInfoPage_CancelButton(){
    return $("button#cancel");
  }
  //Remove Buttons
  get removeButtonBackpack(){
    return $("button#remove-sauce-labs-backpack");
  }
  get removeButtonBikeLight(){
    return $("button#remove-sauce-labs-bike-light");
  }
  get removeButtonBoltTShirt(){
    return $("button#remove-sauce-labs-bolt-t-shirt");
  }
  get removeButtonFleeceJacket(){
    return $("button#remove-sauce-labs-fleece-jacket");
  }
  get removeButtonOnesie(){
    return $("button#remove-sauce-labs-onesie");
  }
  get removeButtonRedTShirt(){
    return $("/html//button[@id='remove-test.allthethings()-t-shirt-(red)']");
  }
  async addProductsToCart_CalculateTotal(itemId1, itemId2) {
    //Adds products to the cart
    var productsID = [];
    productsID.push(itemId1, itemId2);
    var productPrice = [];
    var addToCartButtonSelector;
    // var priceSubTotal;
    // var priceTotal;
    // var feeValue;
    for (var i = 0; i < productsID.length; i++) {
      var tempProductHeader = await $(
        "#item_" + productsID[i] + "_title_link"
      ).getText();
      this.productNameHeader.push(tempProductHeader);
      if (productsID[i] === 4) {
        addToCartButtonSelector = await $(
          "#add-to-cart-sauce-labs-backpack"
        ).click();
        productPrice.push(29.99);
      }
      if (productsID[i] === 0) {
        addToCartButtonSelector = await $(
          "#add-to-cart-sauce-labs-bike-light"
        ).click();
        productPrice.push(9.99);
      }
      if (productsID[i] === 1) {
        addToCartButtonSelector = await $(
          "#add-to-cart-sauce-labs-bolt-t-shirt"
        ).click();
        productPrice.push(15.99);
      }
      if (productsID[i] === 5) {
        addToCartButtonSelector = await $(
          "#add-to-cart-sauce-labs-fleece-jacket"
        ).click();
        productPrice.push(49.99);
      }
      if (productsID[i] === 2) {
        addToCartButtonSelector = await $(
          "#add-to-cart-sauce-labs-onesie"
        ).click();
        productPrice.push(7.99);
      }
      if (productsID[i] === 3) {
        addToCartButtonSelector = await $(
          "/html//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']"
        ).click();
        productPrice.push(15.99);
      }
    }
    this.priceSubTotal = productPrice[0] + productPrice[1];
    console.log("SUBTOTAL PRICE IS: " + this.priceSubTotal);
    //Calculating price Total = priceSubTotal + FEES - apply 8%
    //this.feeValue = new Number (parseFloat((0.08 * this.priceSubTotal).toFixed(2)));
    this.feeValue = (0.08 * this.priceSubTotal).toFixed(2);
    this.feeValue = Math.round(this.feeValue * 100) / 100;

    this.priceTotal = parseFloat(
      (this.feeValue + this.priceSubTotal).toFixed(2)
    );
    console.log("FEE VALUE IS: " + this.feeValue);
    console.log("TOTAL PRICE IS: " + this.priceTotal);
    console.log("PRODUCT SELECTORS " + this.productNameHeader);
    //"Sauce Labs Bike Light"
  }

  async checkoutProductsSelected() {
    if (
      this.productNameHeader[0] === "Sauce Labs Backpack" ||
      this.productNameHeader[1] === "Sauce Labs Backpack"
    ) {
      await expect(this.sauceLabsBackpackSelector).toHaveTextContaining(
        "Sauce Labs Backpack"
      );
      await expect(this.sauceLabsBackpack_PriceSelector).toHaveText("$29.99");
    }
    if (
      this.productNameHeader[0] === "Sauce Labs Bike Light" ||
      this.productNameHeader[1] === "Sauce Labs Bike Light"
    ) {
      await expect(this.sauceLabsBikeLightSelector).toHaveTextContaining(
        "Sauce Labs Bike Light"
      );
      await expect(this.sauceLabsBikeLigh_PriceSelector).toHaveText("$9.99");
    }
    if (
      this.productNameHeader[0] === "Sauce Labs Bolt T-Shirt" ||
      this.productNameHeader[1] === "Sauce Labs Bolt T-Shirt"
    ) {
      await expect(this.sauceLabsBoltTshirt).toHaveTextContaining(
        "Sauce Labs Bolt T-Shirt"
      );
      await expect(this.sauceLabsBoltTshirt_PriceSelector).toHaveText("$15.99");
    }
    if (
      this.productNameHeader[0] === "Sauce Labs Fleece Jacket" ||
      this.productNameHeader[1] === "Sauce Labs Fleece Jacket"
    ) {
      await expect(this.sauceLabsFleeceJacket).toHaveTextContaining(
        "Sauce Labs Fleece Jacket"
      );
      await expect(this.sauceLabsFleeceJacket_PriceSelector).toHaveText(
        "$49.99"
      );
    }
    if (
      this.productNameHeader[0] === "Sauce Labs Onesie" ||
      this.productNameHeader[1] === "Sauce Labs Onesie"
    ) {
      await expect(this.sauceLabsOnesie).toHaveTextContaining(
        "Sauce Labs Onesie"
      );
      await expect(this.sauceLabsOnesie_PriceSelector).toHaveText("$7.99");
    }
    if (
      this.productNameHeader[0] === "Test.allTheThings() T-Shirt (Red)" ||
      this.productNameHeader[1] === "Test.allTheThings() T-Shirt (Red)"
    ) {
      await expect(this.testAllTheThingsTShirt).toHaveTextContaining(
        "Test.allTheThings() T-Shirt (Red)"
      );
      await expect(this.testAllTheThingsTShirt_PriceSelector).toHaveText(
        "$15.99"
      );
    }
  }

  async addYourInformationToCheckout() {
    await expect(this.checkoutYourInformationHeader).toHaveText(
      "CHECKOUT: YOUR INFORMATION"
    );
    await this.inputFirstName.setValue("Priscila");
    await this.inputLastName.setValue("Scott");
    await this.inputPostalCode.setValue("0844325A");
  }

  async addAssertionsCheckoutOverviewPage() {
    await expect(this.checkoutOverviewHeader).toHaveText("CHECKOUT: OVERVIEW");
    await this.checkoutProductsSelected();
    await expect(this.paymentInformationSauceCard).toHaveText(
      "SauceCard #31337"
    );
    await expect(this.shippingInformationFreePonyDelivery).toHaveText(
      "FREE PONY EXPRESS DELIVERY!"
    );
    await expect(this.subtotalLabel).toHaveTextContaining(
      "Item total: $" + this.priceSubTotal
    );
    await expect(this.taxLabel).toHaveTextContaining("Tax: $" + this.feeValue);
    await expect(this.totalLabel).toHaveTextContaining(
      "Total: $" + this.priceTotal
    );
  }

  async addAssertionsCheckoutCompletePage() {
    await expect(this.checkoutComplete_PrimaryHeaderTitle).toHaveTextContaining(
      "CHECKOUT: COMPLETE!"
    );
    await expect(
      this.checkoutComplete_SecondaryHeaderTitle
    ).toHaveTextContaining("THANK YOU FOR YOUR ORDER");
    await expect(this.checkoutComplete_Text).toHaveTextContaining(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  }

  //Removes products from basket
  async removeProductsFromCart(itemId1, itemId2){
    if (itemId1 || itemId2 === 4){
      this.removeButtonBackpack.click();
    }
    if(itemId1 || itemId2 === 0){
      this.removeButtonBikeLight.click();
    }
    if(itemId1 || itemId2 === 1){
      this.removeButtonBoltTShirt.click();
    }
    if(itemId1 || itemId2 === 5){
      this.removeButtonFleeceJacket.click();
    }
    if(itemId1 || itemId2 === 2){
      this.removeButtonOnesie.click();
    }
    if(itemId1 || itemId2 === 3){
      this.removeButtonRedTShirt.click();
    }
    else{
      console.log("ERROR REMOVING PRODUCT FROM THE BASKET");
    }
  }
}

export default new AddProductstoCart();
