describe('demoaut page',()=>{
    it('support link',()=>{
        browser.url('http://newtours.demoaut.com/');
        const supportButton=$("//*[text()='SUPPORT']");
        supportButton.click();
        browser.switchWindow('Under Construction: Mercury Tours');

        const backToHome=$("//a[@href='mercurywelcome.php']");
        backToHome.click();
        browser.switchWindow('Welcome: Mercury Tours');
        browser.pause('1000');

    })
})