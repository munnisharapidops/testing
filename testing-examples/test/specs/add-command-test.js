describe('Add Command', () => {
    beforeEach(async () => {
        await browser.setWindowSize(1800, 1200);
        await browser.url('http://www.webdriveruniversity.com');
    })

    it('Test webdriveruni login portal', async() => {
        const clickById = await $('#login-portal');
        await clickById.click();
       
        await browser.switchWindow('WebDriver | Login Portal');
        ///console.log('CONTACT US HEADER:' + browser.getTitle());
        const loginPageData=await browser.getUrlAndTitle();
      expect(loginPageData.title).to.contains('Login Portal');
         expect(loginPageData.url).to.contains('Login-Portal');
    });
    
});