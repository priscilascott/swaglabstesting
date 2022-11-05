import AddProductsToCart from "./add-products-to-cart.page";

class ProductDetailsPage {
  get productName_DetailsPage() {
    return $(".inventory_details_name.large_size");
  }
  get productDescription_DetailsPage() {
    return $(".inventory_details_desc.large_size");
  }
  get productPrice_DetailsPage() {
    return $(".inventory_details_price");
  }
  get buttonAddToCart_Backpack_DetailsPage() {
    return $("button#add-to-cart-sauce-labs-backpack");
  }
  get buttonAddToCart_BikeLight_DetailsPage() {
    return $("button#add-to-cart-sauce-labs-bike-light");
  }
  get buttonAddToCart_BoltTShirt_DetailsPage() {
    return $("button#add-to-cart-sauce-labs-bolt-t-shirt");
  }
  get buttonAddToCart_FleeceJacket_DetailsPage() {
    return $("button#add-to-cart-sauce-labs-fleece-jacket");
  }
  get buttonAddToCart_Onesie_DetailsPage() {
    return $("button#add-to-cart-sauce-labs-onesie");
  }
  get buttonAddToCart_TestAllTheThingsTShirt_DetailsPage() {
    return $("button#add-to-cart-test.allthethings()-t-shirt-(red)");
  }
  get buttonBackToProducts_DetailsPage() {
    return $("button#back-to-products");
  }

  async assertions(itemID) {
    if (itemID === 0) {
      await expect(this.productName_DetailsPage).toHaveText(
        "Sauce Labs Bike Light"
      );
      await expect(this.productDescription_DetailsPage).toHaveText(
        "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."
      );
      await expect(this.productPrice_DetailsPage).toHaveText("$9.99");
      await expect(this.buttonBackToProducts_DetailsPage).toBeDisplayed();
      await expect(this.buttonAddToCart_BikeLight_DetailsPage).toBeDisplayed();
    }
    if (itemID === 1) {
      await expect(this.productName_DetailsPage).toHaveText(
        "Sauce Labs Bolt T-Shirt"
      );
      await expect(this.productDescription_DetailsPage).toHaveText(
        "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."
      );
      await expect(this.productPrice_DetailsPage).toHaveText("$15.99");
      await expect(this.buttonBackToProducts_DetailsPage).toBeDisplayed();
      await expect(this.buttonAddToCart_BoltTShirt_DetailsPage).toBeDisplayed();
    }
    if (itemID === 2) {
      await expect(this.productName_DetailsPage).toHaveText(
        "Sauce Labs Onesie"
      );
      await expect(this.productDescription_DetailsPage).toHaveText(
        "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel."
      );
      await expect(this.productPrice_DetailsPage).toHaveText("$7.99");
      await expect(this.buttonBackToProducts_DetailsPage).toBeDisplayed();
      await expect(this.buttonAddToCart_Onesie_DetailsPage).toBeDisplayed();
    }
    if (itemID === 3) {
      await expect(this.productName_DetailsPage).toHaveText(
        "Test.allTheThings() T-Shirt (Red)"
      );
      await expect(this.productDescription_DetailsPage).toHaveText(
        "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton."
      );
      await expect(this.productPrice_DetailsPage).toHaveText("$15.99");
      await expect(this.buttonBackToProducts_DetailsPage).toBeDisplayed();
      await expect(
        this.buttonAddToCart_TestAllTheThingsTShirt_DetailsPage
      ).toBeDisplayed();
    }
    if (itemID === 4) {
      await expect(this.productName_DetailsPage).toHaveText(
        "Sauce Labs Backpack"
      );
      await expect(this.productDescription_DetailsPage).toHaveText(
        "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
      );
      await expect(this.productPrice_DetailsPage).toHaveText("$29.99");
      await expect(this.buttonBackToProducts_DetailsPage).toBeDisplayed();
      await expect(this.buttonAddToCart_Backpack_DetailsPage).toBeDisplayed();
    }
    if (itemID === 5) {
      await expect(this.productName_DetailsPage).toHaveText(
        "Sauce Labs Fleece Jacket"
      );
      await expect(this.productDescription_DetailsPage).toHaveText(
        "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."
      );
      await expect(this.productPrice_DetailsPage).toHaveText("$49.99");
      await expect(this.buttonBackToProducts_DetailsPage).toBeDisplayed();
      await expect(
        this.buttonAddToCart_FleeceJacket_DetailsPage
      ).toBeDisplayed();
    }
  }
}

export default new ProductDetailsPage();
