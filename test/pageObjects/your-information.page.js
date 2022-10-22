class YourInformation{
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
      get checkoutYourInfoPage_CancelButton(){
        return $("button#cancel");
      }
      async addYourInformationToCheckout() {
        await expect(this.checkoutYourInformationHeader).toHaveText(
          "CHECKOUT: YOUR INFORMATION"
        );
        await this.inputFirstName.setValue("Priscila");
        await this.inputLastName.setValue("Scott");
        await this.inputPostalCode.setValue("0844325A");
      }
}

export default new YourInformation();
 