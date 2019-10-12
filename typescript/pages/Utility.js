"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginPage_1 = require("./LoginPage");
const Protractor_1 = require("Protractor");
const assert_1 = __importDefault(require("assert"));
class Utility {
    getPageDescriptor(pageName, elementName) {
        switch (pageName) {
            case "LoginPage":
                const loginPage = new LoginPage_1.LoginPage(elementName);
                this.elmntFromPage = loginPage.elementIdentifier;
                break;
        }
    }
    waitForElementClickable(elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag;
            var EC = Protractor_1.protractor.ExpectedConditions;
            yield Protractor_1.browser.wait(EC.elementToBeClickable(Protractor_1.element(elementName)), 20000).then((isClickable) => __awaiter(this, void 0, void 0, function* () {
                if (isClickable) {
                    flag = true;
                    yield Protractor_1.element(elementName).click();
                }
                else {
                    flag = false;
                    assert_1.default.fail("element: " + elementName + "is not clickable");
                }
            }));
            // return flag;
        });
    }
    enterText(elementName, pageName, text) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(pageName, elementName);
            var elmnt = this.elmntFromPage;
            var EC = Protractor_1.protractor.ExpectedConditions;
            yield Protractor_1.browser.wait(EC.visibilityOf(Protractor_1.element(elmnt)), 10000).then((isVisibile) => __awaiter(this, void 0, void 0, function* () {
                if (isVisibile) {
                    yield Protractor_1.element(elmnt).clear();
                    yield Protractor_1.element(elmnt).sendKeys(text);
                }
                else
                    assert_1.default.fail("element: " + elmnt + "is not visible");
            }));
        });
    }
    scrollToElement(elementName, pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getPageDescriptor(pageName, elementName);
            var elmnt = Protractor_1.element(this.elmntFromPage);
            yield Protractor_1.browser.executeScript("arguments[0].scrollIntoView(true)", elmnt);
            yield Protractor_1.browser.actions().mouseMove(elmnt);
        });
    }
}
exports.Utility = Utility;
