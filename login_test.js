const { appconfig } = require("./appconfig");

Feature('login');

Scenario('test something', (I) => {

    //in --verbose this will print out the value from appconfig.js to prove the config is working
    I.say(appconfig.testConfig, 'red');


});
