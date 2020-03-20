const assert=require('assert');
describe('google.com page',()=>{
    it('open page',async()=>{
        await browser.url('https://www.google.com/');
       await  browser.pause(5000);
        const search=await $('.gLFyf');
        await search.setValue('css');
        await browser.elementSendKeys(search.elementId,'\n');
        const title = await browser.getTitle();
        console.log('title is' +title);
        let link = await $('.LC20lb');
       // console.log(link);
        link = await link.getText();
        console.log(link);
        assert.strictEqual(link,'CSS Tutorial - W3Schools')


    })
})

// var chromeCapabilities=webdriver.Capabilities.chrome()
// var chromeOptions = {
//         'excludeSwitchest': ['enable-automation']
// };
// chromeCapabilities.set('chromeOptions', chromeOptions);
// var driver = new webdriver.Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').withCapabilities(chromeCapabilities).build()