import { async } from "q";
import {Utility} from "../pages/Utility";
import {browser,by,protractor,element} from "protractor"
const { Given, Then, When} = require('cucumber');
var util:Utility =new Utility();

Given(/^user is available on login page$/,async()=>{
    browser.get("https://classic.crmpro.com/index.html");
});