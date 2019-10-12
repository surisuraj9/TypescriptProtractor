"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
const multiCucumberReport = __importStar(require("protractor-multiple-cucumber-html-reporter-plugin"));
const fs = __importStar(require("fs"));
const mkdirp = __importStar(require("mkdirp"));
const path = __importStar(require("path"));
const jsonReports = path.join(process.cwd(), '/reports/json');
const htmlReports = path.join(process.cwd(), '/reports/html');
const targetJson = jsonReports + "\cucmber_report.json";
const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/cucmber_reporter_" + Date.now() + ".html",
    reportSuiteAsScenarios: true,
    theme: "boothstrap",
    launchReport: true
};
class Reporter {
    static createDirectory(dir) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }
    static createHtmlReport() {
        try {
            reporter.generate(cucumberReporterOptions);
        }
        catch (err) {
            if (err)
                throw new Error("Failed to save cucumber test results to json file");
        }
    }
    static createMultipleHTMLReport() {
        try {
            multiCucumberReport.generate(cucumberReporterOptions);
        }
        catch (err) {
            if (err)
                throw new Error("Failed to save multiple cucumber test results to json file");
        }
    }
}
exports.Reporter = Reporter;
