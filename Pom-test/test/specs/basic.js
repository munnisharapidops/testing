let login_page=require("./pomObj.js");

describe('salesmate',()=>{
    function setemail(Email){
        return login_page.email.setValue(Email);
    }
    function setpassword(Pass){
        return login_page.password.setValue(Pass);
    }
    function setpassword(Pass){
        return login_page.password.setValue(Pass);
    }
    it('login page',()=>{
        browser.url('https://kalp.salesmate.io/login.html#');
        const userName=$("[name='email']");
        userName.waitForDisplayed();
        userName.addValue(Email);
        browser.pause('1000');

        const password=$("[name='password']");
        userName.waitForDisplayed();
        userName.addValue(Password);
        browser.pause('1000');


        const signIn=$("#login_btn");
        signIn.click();
        browser.switchWindow('Salesmate');
        browser.pause('1000');

    })
})