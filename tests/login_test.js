const { appconfig } = require("../appconfig");


Feature('login');

Scenario('log in with correct details', (I, LoginPage, Dashboard) => {

    //in --verbose this will print out the value from appconfig.js to show it works
    I.say(appconfig.testConfig, 'red');

    I.amOnPage('/')
    I.click(Dashboard.formAuthButton)
    I.fillField(LoginPage.usernameField,'tomsmith')
    I.fillField(LoginPage.passwordField,'SuperSecretPassword!')
    I.click(LoginPage.loginButton)
    I.see(LoginPage.successText, LoginPage.successElement)

    I.saveScreenshot("Login_Screenshot_Image.png");
    I.seeVisualDiff("Login_Screenshot_Image.png", {tolerance: 1, prepareBaseImage: false});    

});


