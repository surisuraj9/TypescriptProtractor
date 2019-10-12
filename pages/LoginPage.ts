import {browser,protractor,by,element} from "protractor";

export class LoginPage{
    public elementIdentifier:any;
    constructor(elementName){
        switch (elementName){
            case "username":
                this.elementIdentifier=by.name("username");
                break;
            case "password":
                this.elementIdentifier=by.name("password");
                break;
            case "loginBtn":
                this.elementIdentifier=by.xpath("//input[@value='Login']");
                break;
            case "signUpBtn":
                this.elementIdentifier=by.linkText("Sign Up");
                break;
            case "crmLogo":
                this.elementIdentifier=by.xpath("//a[@class='navbar-brand']//img[@class='img-responsive']");
                break;
        }
    }
}