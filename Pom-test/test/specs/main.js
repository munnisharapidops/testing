let expect = require('chai').expect;
let LoginPage = require('./getValues.js');

 describe('login form', function () {
//     it('should deny access with wrong creds', function () {
//         LoginPage.open();
//         LoginPage.email.setValue('foo');
//         LoginPage.password.setValue('bar');
//         LoginPage.submit();
//         browser.switchWindow('Salesmate');
//         // const text=browser.getText();
//         // console.log(text);
//         //const loginPageTitle=browser.getTitle();
//        // const loginUrl=browser.getUrl();
//        // expect(loginPageTitle).to.contains('Salesmate');
//         //expect(loginUrl).to.contains('Login-Portal');
//        // expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');
//     });

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
        // LoginPage.firstname.waitForDisplayed();
        // LoginPage.firstname.clearValue();
        // browser.pause('2000');
        // LoginPage.firstname.setValue('munni');
        // browser.pause('2000');
        //expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!');
    });
});