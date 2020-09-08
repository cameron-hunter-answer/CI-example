const { setHeadlessWhen } = require('@codeceptjs/configure');
const { appconfig } = require("../appconfig");

//note that all paths are '../' in this file rather than the usual './'

// turn on headless mode when running with HEADLESS=true environment variable
// setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: '../*_test.js',
  output: '../output',
  helpers: {
    WebDriver: {
      url: appconfig.url,
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: false,
      windowSize: appconfig.windowSize,
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
        }
      }
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
