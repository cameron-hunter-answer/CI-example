const { setHeadlessWhen } = require('@codeceptjs/configure');


// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://the-internet.herokuapp.com',
      show: true,
      browser: 'chromium',
    },
    ResembleHelper : {
      require: "codeceptjs-resemblehelper",
      screenshotFolder : "./tests/output/",
      baseFolder: "./tests/screenshots/base/",
      diffFolder: "./tests/screenshots/diff/"
    },
  },
  include: {
    I: './steps_file.js',
    LoginPage: "./pages/Login.js",
    Dashboard: "./pages/Dashboard.js",

  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs_playwright_template',
  plugins: {    
    allure: {},  
    pauseOnFail: {},
    retryFailedStep: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
