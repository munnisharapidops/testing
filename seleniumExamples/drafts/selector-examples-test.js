describe('selectors test', () => {
    beforeEach(function () {
        browser.setWindowSize(1800, 1200);
        browser.url('http://www.webdriveruniversity.com');
    })

    it('By ID', () => {
        const clickById = $('#contact-us');
        clickById.click();
        browser.pause(2000);
    });
    it.skip('By Class', () => {
        const clickByClass = $('.section-title');
        clickByClass.click();
        browser.pause(2000);
    });
    it('By Xpath', () => {
        const clickByXpath = $("//h1[text()='CONTACT US']/../..");
        clickByXpath.click();
        browser.pause(2000);
    });
    it('By CSS', () => {
        const clickByCss = $('#contact-us h1');
        clickByCss.click();
        browser.pause(2000);
    });
});