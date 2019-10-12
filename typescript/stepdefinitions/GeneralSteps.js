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
const Utility_1 = require("../pages/Utility");
const protractor_1 = require("protractor");
const { Given, Then, When } = require('cucumber');
var util = new Utility_1.Utility();
Given(/^user is available on login page$/, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.get("https://classic.crmpro.com/index.html");
}));
