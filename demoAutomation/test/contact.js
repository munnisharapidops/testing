describe('demoaut page',()=>{
    it('contact link',()=>{
        browser.url('http://newtours.demoaut.com/');
        const contactButton=$("//*[text()='CONTACT']");
        contactButton.click();
        browser.switchWindow('Under Construction: Mercury Tours');

        const backToHome=$("//a[@href='mercurywelcome.php']");
        backToHome.click();
        browser.switchWindow('Welcome: Mercury Tours');
        browser.pause('1000');

    })
})