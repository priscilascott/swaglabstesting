class RemoveProductsFromCart{
     //Remove Buttons
  get removeButtonBackpack() {
    return $("button#remove-sauce-labs-backpack");
  }
  get removeButtonBikeLight() {
    return $("button#remove-sauce-labs-bike-light");
  }
  get removeButtonBoltTShirt() {
    return $("button#remove-sauce-labs-bolt-t-shirt");
  }
  get removeButtonFleeceJacket() {
    return $("button#remove-sauce-labs-fleece-jacket");
  }
  get removeButtonOnesie() {
    return $("button#remove-sauce-labs-onesie");
  }
  get removeButtonRedTShirt() {
    return $("/html//button[@id='remove-test.allthethings()-t-shirt-(red)']");
  }
  //Removes products from basket
  async removeProductsFromCart(itemId1, itemId2) {
    if (itemId1 || itemId2 === 4) {
      this.removeButtonBackpack.click();
    }
    if (itemId1 || itemId2 === 0) {
      this.removeButtonBikeLight.click();
    }
    if (itemId1 || itemId2 === 1) {
      this.removeButtonBoltTShirt.click();
    }
    if (itemId1 || itemId2 === 5) {
      this.removeButtonFleeceJacket.click();
    }
    if (itemId1 || itemId2 === 2) {
      this.removeButtonOnesie.click();
    }
    if (itemId1 || itemId2 === 3) {
      this.removeButtonRedTShirt.click();
    } else {
      console.log("ERROR REMOVING PRODUCT FROM THE BASKET");
    }
  }
}

export default new RemoveProductsFromCart();