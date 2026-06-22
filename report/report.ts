// @ts-ignore
import report from 'multiple-cucumber-html-reporter';
 

report.generate({
    jsonDir:"test-results",
    reportPath:"test-results/reports/",
    reportName: "Playwright Automation report",
    pageTitle:"E-commerce app",
    displayDuration:true,
     metadata: {
        browser: {
            name: "chrome",
            version: "149",
        },
        device: "Alphious-PC",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
     customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "E-commerce app" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Unit-1" }
        ],
    },

})