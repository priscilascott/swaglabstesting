class CartButton{
    get cartButton(){
        return $("div#shopping_cart_container > .shopping_cart_link");
    }
    get shoppingCartBadge(){
        return $(".shopping_cart_badge");
    }
}

export default new CartButton();