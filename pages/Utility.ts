import {LoginPage} from "./LoginPage";
import { browser,protractor,element } from "Protractor";
import assert  from "assert";
export class Utility{
    public elmntFromPage:any;
    getPageDescriptor(pageName:string, elementName:string){
        switch(pageName){
            case "LoginPage":
                const loginPage:LoginPage = new LoginPage(elementName);
                this.elmntFromPage=loginPage.elementIdentifier;
                break;
        }
    }

    async waitForElementClickable(elementName:any){
        let flag:boolean;
        var EC=protractor.ExpectedConditions;
        await browser.wait(EC.elementToBeClickable(element(elementName)),20000).then(async (isClickable)=>{
            if(isClickable){
                flag=true;
                await element(elementName).click();
            }
            else{
                flag=false;
                assert.fail("element: "+elementName+"is not clickable");
            }
        });
        // return flag;
    }

    async enterText(elementName:string,pageName:string,text:string){
        this.getPageDescriptor(pageName,elementName);
        var elmnt=this.elmntFromPage;
        var EC= protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(element(elmnt)),10000).then(async (isVisibile)=>{
            if(isVisibile){
                await element(elmnt).clear();
                await element(elmnt).sendKeys(text);      
            }
            else
                assert.fail("element: "+elmnt+"is not visible")
        });
    }
    async scrollToElement(elementName:string,pageName:string){
        this.getPageDescriptor(pageName,elementName);
        var elmnt=element(this.elmntFromPage);
        await browser.executeScript("arguments[0].scrollIntoView(true)",elmnt);
        await browser.actions().mouseMove(elmnt);
    }
}