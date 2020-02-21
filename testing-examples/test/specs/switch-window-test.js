describe('selectors test', () => {
    beforeEach(function () {
        browser.setWindowSize(1800, 1200);
        browser.url('http://www.webdriveruniversity.com');
    })

    it('By ID', () => {
        const clickById = $('#contact-us');
        clickById.click();
        console.log('HOME PAGE HEADER:' + browser.getTitle());
        browser.pause(2000);
        browser.switchWindow('WebDriver | Contact Us');
        console.log('CONTACT US HEADER:' + browser.getTitle());
    });
    
});