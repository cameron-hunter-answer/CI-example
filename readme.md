# CodeceptJS Playwright Template  

This template is designed to give AD Testers a head start in writing a CodeceptJS framework. It also includes a login test to demonstrate the intended usage of the framework.  

It comes with plugins packages and configurations as follows:  
- Playwright, WebDriver, Protractor (Playwright is the default)
- resemblejs (screenshot comparison tool)
- Allure reporting
- Pause On Fail
- Page Object Model
- appconfig.js for project variables

#### How to get started
- Make sure you have npm installed https://www.npmjs.com/get-npm
- Clone or download this repo to a folder by using git bash in that folder `git clone https://github.com/Answer-Digital-Test-Team/codeceptjs_playwright_template.git`
- Open that folder in an IDE or code editor
- Open a terminal in that folder location
- run the command `npm install` to install all the dependencies
- If you get a typescript error, run `npm install -g typescript` and then `npm link typescript`

##### Some useful terminal commands to get you started:  
- `npx codeceptjs run` to run all tests
- `npx codeceptjs run --verbose` to run tests with logging
- `npx codeceptjs run-multiple basic` to run on multiple browsers, see config file under "multiple" to configure
- `npx codeceptjs run -c ./config/webDriverConfig.js` to run using the WebDriver library and config file (this works with no other code changes)
- `npx codeceptjs run -c ./config/protractorConfig.js` to run using the Protractor library and config file (this works with no other code changes)
- `npx codeceptjs run -p pauseOnFail` to run tests and pause at a failure (ie show the interactive terminal) for debugging
- `npx codeceptjs run --plugins allure` to run with allure reporting
- `allure serve output` to see the report (historic reports are saved to the output folder in xml format)
- See the documentation for more https://codecept.io/commands/#commands


##### Tips and tricks
- Test file names need to be appended with `_test`
- To debug, either create a debug terminal and use breakpoints, or run with command `npx codeceptjs run -p pauseOnFail` or put a line of code `pause();` where you want the interactive shell to start. See documentation on the interactive shell. https://codecept.io/basics/#debug
- In codecept.conf.js, the "show" option toggles headless mode
- To add page objects to the project, add their path in codecept.conf.js under "include"
- To create custom helpers to append to the `I` object, they go in steps_file.js https://codecept.io/best/#refactoring-and-pageobjects
- To create custom helpers based on code other than the I object (webdriver/puppeteer/etc), see the documentation https://codecept.io/helpers/
- Put your expected screenshot for screenshot comparison in `./tests/screenshots/base`  , the tests will output screenshots to `./output` and the visual comparison will end up in `./tests/screenshots/diff`
- The I.grab method (for getting data from the page to manipulate) needs to be in an async function with an await, see the documentation for how this works https://codecept.io/basics/#grabbing
- Protractor has a boolean in the config file `angular: false` set this to true for added benefits if you are testing an angular app 

##### Documentation:  
Additional Documentation for CodeCeptJS can be found at https://codecept.io/basics/. 

*By Cameron Hunter*  

