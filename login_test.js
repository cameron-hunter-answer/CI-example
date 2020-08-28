const { appconfig } = require("./appconfig");


Feature('login');

Scenario('test something', (I, LoginPage, Dashboard) => {

    //in --verbose this will print out the value from appconfig.js to prove the project variable config is working
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


