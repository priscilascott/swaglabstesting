class BurgerMenuComponent{
    get burgerMenu(){
        return $("#react-burger-menu-btn");
    } 
    get allItemsLink(){
        return $("a#inventory_sidebar_link");
    }
    get aboutLink(){
        return $("a#about_sidebar_link");
    }
    get logoutLink(){
        return $("a#logout_sidebar_link");
    }
    get resetAppStateLink(){
        return $("a#reset_sidebar_link");
    }
}

export default new BurgerMenuComponent();