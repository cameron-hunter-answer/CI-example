# CodeceptJS Playwright Template  

This template is designed to give AD Testers a head start in writing a CodeceptJS framework. It also includes a login test to demonstrate the intended usage of the framework.  

It comes with plugins, packages and configurations as follows:  
- Playwright
- resemblejs (screenshot comparison tool)
- Allure reporting
- Pause On Fail
- Page Object Model
- appconfig.js for project variables

#### How to get started
- Make sure you have npm installed https://www.npmjs.com/get-npm
- Clone or download this repo to a folder
- Open that folder in VSCode
- Open a terminal in VSCode (I use powershell as my terminal, if any of the following commands don't work, it may be because you are not using powershell)
- two important files to understand the project are codecept.conf.js and login_test.js, so have a look around and read the rest of this readme

#### Some useful commands:  
- `npx codeceptjs run` to run all tests
- `npx codeceptjs run --verbose` to run tests with logging
- `npx codeceptjs run -p pauseOnFail` to run tests and pause at a failure (ie show the interactive terminal) useful for debugging
- `npx codeceptjs run --plugins allure` to run with allure reporting
- `allure serve output` to see the report (historic reports end up in the output folder, not sure how to use them because they are xml)
- See the documentation for more https://codecept.io/commands/#commands


#### Tips and tricks
- Test file names need to be appended with `_test`
- To debug, either create a debug terminal and use breakpoints, or run with command `npx codeceptjs run -p pauseOnFail` or put a line of code `pause();` where you want the interactive shell to start. See documentation on the interactive shell. https://codecept.io/basics/#debug
- In `codecept.conf.js`, the "show" option toggles headless mode
- To add page objects to the project, add their path in codecept.conf.js under "include"
- To create custom helpers to append to the "I" object, they go in `steps_file.js` https://codecept.io/best/#refactoring-and-pageobjects
- To create custom helpers based on code other than the I object (webdriver/puppeteer/etc), see the documentation https://codecept.io/helpers/
- Put your expected screenshot for screenshot comparison in `./tests/screenshots/base`  , the tests will output screenshots to `./output` and the visual comparison will end up in `./tests/screenshots/diff`

#### Limitations and recommendations:  
- The I.grab method (for getting data from the page to manipulate) needs to be in an async function with an await, see the documentation for how this works https://codecept.io/basics/#grabbing
- There is an auto-retry feature that I have disabled, it is useful for flaky tests but annoying when it takes a load of screenshots and fills your output folder

#### Documentation:  
The documentation is very extensive and deals with simple and difficult problems https://codecept.io/basics/

*By Cameron Hunter*  

