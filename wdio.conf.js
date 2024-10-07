const path = require("path");

exports.config = {
  runner: "local",

  specs: ["./test/specs/**/*.js"],
  exclude: [],

  maxInstances: 1,
  capabilities: [
    {
      "appium:platformName": "Android",
      "appium:platformVersion": "9.0",
      "appium:deviceName": "IslamHassanEmulator_Device",
      "appium:automationName": "uiautomator2",
      "appium:app": path.join(
        process.cwd(),
        "app/android/Android-MyDemoAppRN.1.3.0.build-244.apk"
      ),
    },
  ],

  logLevel: "info",
  bail: 0,
  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  address: "localhost",
  port: 4725,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
};
