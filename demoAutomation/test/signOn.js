describe('demoaut page',()=>{
    it('sign-on link',()=>{
        browser.url('http://newtours.demoaut.com/');
        const supportButton=$("//*[text()='SIGN-ON']");
        supportButton.click();
        browser.switchWindow('Sign-on: Mercury Tours');
        const userName=$("[name='userName']");
        userName.waitForDisplayed();
        userName.addValue('kalpTest');
        browser.pause('2000');
        const password=$("[name='password']");
        password.waitForDisplayed();
        password.addValue('kalpTest');
        browser.pause('2000');
        const loginButton=$("[name='login']");
        loginButton.click();

    })
})