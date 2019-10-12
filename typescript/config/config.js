"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Protractor_1 = require("Protractor");
const reporter_1 = require("../support/reporter");
const jsonReports = process.cwd() + "reports/json";
exports.config = {
    chromeDriver: '../../node_modules/chromedriver/lib/chromedriver/chromedriver.exe',
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: "chrome",
        // shardTestFiles: true,
        // maxInstances: 10,
        chromeOptions: {
            useAutomationExtension: false,
            args: ['disable-infobars']
        }
        /*chromeOptions: {
            args: [ "--headless",
                    "--disable-gpu",
                    "--window-size=800,600",
                    "--debuggerAddress=127.0.0.1:12633" ]
        }*/
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    plugins: [{
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                removeOriginalJsonReportFile: true,
                displayDuration: true
            }
        }],
    specs: [
        "../../features/*.feature",
    ],
    onPrepare: () => {
        Protractor_1.browser.ignoreSynchronization = false;
        Protractor_1.browser.manage().window().maximize();
        reporter_1.Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: ["../../typescript/stepdefinitions/*.js", "../../typescript/support/*.js"],
        format: "json:./reports/json/cucumber-report.json",
        strict: true,
        plugin: ["pretty"]
    },
    onComplete: () => {
        reporter_1.Reporter.createHtmlReport();
    }
};
