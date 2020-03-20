let config=require("./main-config-test.js/index.js");
//let dataGenerators = require("../utils/dataGenerators.js")
describe("Test contact us page on webdriveruni",()=>{
    beforeEach(function(){
        browser.setWindowSize(1800,1200);
        browser.url("./");

            const pageDetails=browser.getUrlAndTitle();
            expect(pageDetails.url).to.contain("webdriveruniversity");
            expect(pageDetails.title).to.contain("WebDriverUniversity");

    });

    it("submit all information via the contact us page",()=>{
    //    const contactUsButton =$("#contact-us");
    //    contactUsButton.click();
       browser.waitAndClick("#contact-us");

       browser.switchWindow('WebDriver | Contact Us');
       
      // const firstName =$("//*[@name='first_name']");
       //const lastName=$("//*[@name='last_name']");
       //const emailAddress=$("//*[@name='email']");
      // const message=$("//*[@name='message']");
       //const submitButton=$("//*[@value='SUBMIT']");

      // firstName.setValue(config.firstName);
       //lastName.setValue(config.lastName);
      // emailAddress.setValue('jasmine_janu123@gamil.com');
       //message.setValue('hello how are you...?');
       //submitButton.click();
      
       browser.waitAndSendkeys("//*[@name='first_name']",config.firstName);
       browser.waitAndSendkeys("//*[@name='last_name']",config.lastName);
       browser.waitAndSendkeys("//*[@name='email']",'janu_jasmine123@gmail.com');
       browser.waitAndSendkeys("//*[@name='message']",'hello how are you...?');
       browser.waitAndSendkeys("//*[@value='SUBMIT']");

       const contactUsSubmissionDetails=browser.getUrlAndTitle();
       expect(contactUsSubmissionDetails.url).to.contain("contact-form-thank-you");
       browser.pause(5000);
       browser.closeWindow();
       browser.pause(2000);

    });
}); 