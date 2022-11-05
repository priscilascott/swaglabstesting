class AddProductstoCart {
  constructor() {
    this.productNameHeader = [];
    this.priceSubTotal;
    this.priceTotal;
    this.feeValue;
  }
  get productsHeader() {
    return $(".title");
  }
  //Products Selectors:
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
  //Prices Selectors
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
  //Images Selectors
  get backpack_ImageSelector(){
    return $("#item_4_img_link");
  }
  get bikeLight_ImageSelector(){
    return $("#item_0_img_link");
  }
  get boltTShirt_ImageSelector(){
    return $("#item_1_img_link");
  }
  get fleeceJacket_ImageSelector(){
    return $("#item_5_img_link");
  }
  get onesie_ImageSelector(){
    return $("#item_2_img_link");
  }
  get testAllTheThingsTShirt_ImageSelector(){
    return $("#item_3_img_link");
  }

  async addProductsToCart_CalculateTotal(itemId1, itemId2) {
    //Adds products to the cart
    var productsID = [];
    productsID.push(itemId1, itemId2);
    var productPrice = [];
    var addToCartButtonSelector;
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
    //Calculates price Total = priceSubTotal + FEES (apply 8% FEES)
    this.feeValue = (0.08 * this.priceSubTotal).toFixed(2);
    this.feeValue = Math.round(this.feeValue * 100) / 100;

    this.priceTotal = parseFloat(
      (this.feeValue + this.priceSubTotal).toFixed(2)
    );
    console.log("FEE VALUE IS: " + this.feeValue);
    console.log("TOTAL PRICE IS: " + this.priceTotal);
    console.log("PRODUCT SELECTORS " + this.productNameHeader);
  }

  async selectImage(itemId){
    var image_ProductID = itemId;
    var imageSelector;
    
    if(image_ProductID === 0){
      imageSelector = this.bikeLight_ImageSelector.click();
      return image_ProductID;
    }
    if(image_ProductID === 1){
      imageSelector = this.boltTShirt_ImageSelector.click();
    }
    if(image_ProductID === 2){
      imageSelector = this.onesie_ImageSelector.click();
    }
    if(image_ProductID === 3){
      imageSelector = this.testAllTheThingsTShirt_ImageSelector.click();
    }
    if(image_ProductID === 4){
      imageSelector = this.backpack_ImageSelector.click();
    }
    if(image_ProductID === 5){
      imageSelector = this.fleeceJacket_ImageSelector.click();
    }
  }
}

export default new AddProductstoCart();
