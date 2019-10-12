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
Object.defineProperty(exports, "__esModule", { value: true });
const { After, BeforeAll, AfterAll, Status } = require("cucumber");
const protractor_1 = require("protractor");
BeforeAll({ timeout: 100 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.executeScript("document.body.style.zoom='80%'");
    yield protractor_1.browser.get("https://classic.crmpro.com/index.html");
}));
After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === Status.FAILED) {
            const screenShotFail = yield protractor_1.browser.takeScreenshot();
            this.attach(screenShotFail, "image/png");
        }
    });
});
AfterAll({ timeout: 100 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.quit();
}));
