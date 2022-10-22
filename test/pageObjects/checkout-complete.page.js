class CheckoutComplete{
    get checkoutComplete_PrimaryHeaderTitle() {
        return $(".title");
      }
      get checkoutComplete_SecondaryHeaderTitle() {
        return $("div#checkout_complete_container > .complete-header");
      }
      get checkoutComplete_Text() {
        return $("div#checkout_complete_container > .complete-text");
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
}

export default new CheckoutComplete();