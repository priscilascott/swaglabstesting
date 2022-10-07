export default class BasePage{
    open(path){
        return browser.url(`https://saucedemo.com/${path}`);
    }
}