"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginPage {
    constructor(elementName) {
        switch (elementName) {
            case "username":
                this.elementIdentifier = protractor_1.by.name("username");
                break;
            case "password":
                this.elementIdentifier = protractor_1.by.name("password");
                break;
            case "loginBtn":
                this.elementIdentifier = protractor_1.by.xpath("//input[@value='Login']");
                break;
            case "signUpBtn":
                this.elementIdentifier = protractor_1.by.linkText("Sign Up");
                break;
            case "crmLogo":
                this.elementIdentifier = protractor_1.by.xpath("//a[@class='navbar-brand']//img[@class='img-responsive']");
                break;
        }
    }
}
exports.LoginPage = LoginPage;
