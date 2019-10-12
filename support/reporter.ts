import * as reporter from "cucumber-html-reporter";
import * as multiCucumberReport from "protractor-multiple-cucumber-html-reporter-plugin";
import * as fs from "fs";
import * as mkdirp from "mkdirp"
import * as path from "path";

const jsonReports =  path.join(process.cwd(),'/reports/json');
const htmlReports =  path.join(process.cwd(),'/reports/html');
const targetJson = jsonReports + "\cucmber_report.json"

const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/cucmber_reporter_" +Date.now()+".html",
    reportSuiteAsScenarios: true,
    theme: "boothstrap",
    launchReport: true   
};

export class Reporter{
    public static createDirectory(dir:string){
        if(!fs.existsSync(dir)){
            mkdirp.sync(dir);
        }
    }
    public static createHtmlReport(){
        try{
            reporter.generate(cucumberReporterOptions);
        }catch(err){
            if(err)
                throw new Error("Failed to save cucumber test results to json file");
        }
    }
    public static createMultipleHTMLReport(){
        try{
            multiCucumberReport.generate(cucumberReporterOptions);
        }catch(err){
            if(err)
                throw new Error("Failed to save multiple cucumber test results to json file")
        }
    }
} 
