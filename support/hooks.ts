const { After, BeforeAll, AfterAll, Status } = require("cucumber");
import { browser } from "protractor";  
import { HookScenarioResult } from "cucumber";

BeforeAll({timeout: 100 * 1000}, async () => {
    browser.waitForAngularEnabled(false);
    await browser.executeScript("document.body.style.zoom='80%'")
    await browser.get("https://classic.crmpro.com/index.html");
});

After(async function (this:any,scenario:HookScenarioResult){
    if(scenario.result.status=== Status.FAILED){
        const screenShotFail= await browser.takeScreenshot();
        this.attach(screenShotFail, "image/png");
    }
});

AfterAll({ timeout: 100 * 1000 }, async () => {
    await browser.quit();
});