const { setHeadlessWhen } = require('@codeceptjs/configure');
const { appconfig } = require("../appconfig");

//note that all paths are "../" in this file rather than the usual "./"

// turn on headless mode when running with HEADLESS=true environment variable
// setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: '../*_test.js',
  output: '../output',
  helpers: {
    Protractor:
      { url: appconfig.url,
        driver: 'hosted',
        browser: 'chrome',
        rootElement: 'body',
        windowSize: appconfig.windowSize,
        angular: false
      },    
    ResembleHelper : {
      require: "codeceptjs-resemblehelper",
      screenshotFolder : "../tests/output/",
      baseFolder: "../tests/screenshots/base/",
      diffFolder: "../tests/screenshots/diff/"
    },
  },
  include: {
    I: '../steps_file.js',
    LoginPage: "../pages/Login.js",
    Dashboard: "../pages/Dashboard.js",

  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs_playwright_template',
  plugins: {    
    allure: {},  
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },   
    wdio: {
      enabled: true,
      services: ['selenium-standalone']      
    },
  },
  multiple: {
    basic: {
      /* Multiple browsers are run in parallel for a single test class by default 
      but we can also run multiple test classes in parallel by upping the chunks */
      //chunks: 2,
      browsers: ["chromium", "firefox"]
    },   
  }
}
