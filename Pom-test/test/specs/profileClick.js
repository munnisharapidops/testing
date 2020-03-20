let expect = require('chai').expect;
let profilePage = require('./profilePageValues');

 describe('login form', function () {

    it('click on my profile', function () {
       
        profilePage.profile_page_open();
        const text=browser.getTitle();
        console.log(text);
       // browser.pause('2000');
       profilePage.profile();
       profilePage.my_account_click();
       profilePage.pause('5000');
       profilePage. firstname_click();
       profilePage.firstName.clearValue();
       profilePage.pause('5000');
        //expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!');
    });
});