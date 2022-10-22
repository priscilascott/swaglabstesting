import AddProductsToCart from "../pageObjects/add-products-to-cart.page";
import YourCart from "../pageObjects/your-cart.page";

class Overview{
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
    async addAssertionsCheckoutOverviewPage() {
        await expect(this.checkoutOverviewHeader).toHaveText("CHECKOUT: OVERVIEW");
        await YourCart.checkoutProductsSelected();
        await expect(this.paymentInformationSauceCard).toHaveText(
          "SauceCard #31337"
        );
        await expect(this.shippingInformationFreePonyDelivery).toHaveText(
          "FREE PONY EXPRESS DELIVERY!"
        );
        await expect(this.subtotalLabel).toHaveTextContaining(
          "Item total: $" + AddProductsToCart.priceSubTotal
        );
        await expect(this.taxLabel).toHaveTextContaining("Tax: $" + AddProductsToCart.feeValue);
        await expect(this.totalLabel).toHaveTextContaining(
          "Total: $" + AddProductsToCart.priceTotal
        );
      }
    
}

export default new Overview();