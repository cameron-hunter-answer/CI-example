const { appconfig } = require("../appconfig");


Feature('mail');

Scenario('send email and check it is received', async (I) => {

    const mailbox = await I.haveNewMailbox();

    I.sendEmail({
        to: [mailbox.emailAddress],
        subject: 'Hello',
        body: 'World'
      });

    I.waitForLatestEmail();
    I.seeEmailIsFrom(mailbox.emailAddress);
    I.seeInEmailSubject('Hello');
    I.seeInEmailBody('World');

});