import BasePage from "./base.page";

class LoginPage extends BasePage{
    open(){
        return super.open("");
    }

    get inputUsername(){
        return $("#user-name");
    }

    get inputPassword(){
        return $("#password");
    }

    get loginButton(){
        return $("input#login-button");
    }
    get errorMessage(){
        return $("//div[@id='login_button_container']//form//h3");
    }
    async loginWebsite(username,password){
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

}

export default new LoginPage();