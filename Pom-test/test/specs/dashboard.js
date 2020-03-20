let LoginPage = require('./getValues.js');

describe('dash board page', function () {


    it('should allow access with correct creds', function () {
        LoginPage.open();
        LoginPage.email.setValue('munnisha.sheik@rapidops.com');
        LoginPage.password.setValue('rapid@456');
        LoginPage.submit();
        browser.switchWindow('Salesmate');
        //browser.pause('2000');
        const text=browser.getTitle();
        console.log(text);
       // browser.pause('2000');
        LoginPage.profile();
        LoginPage.my_account_click();
       // browser.pause('5000');
        LoginPage. firstname_click();
        
      //  LoginPage.firstname.sendKeys(Keys.BACK_SPACE);
        browser.pause('2000');
        LoginPage.firstname.waitForDisplayed();
        LoginPage.firstname.setValue('munni');
       
        LoginPage.firstname.clearValue();
        browser.pause('2000');
        
    });
});