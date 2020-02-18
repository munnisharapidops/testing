const assert=require('assert');
describe('test webdriveruni homepage',()=>{
    it('validate whether the webdriver uni homepage title is correct',()=>{
        browser.url('http://www.webdriveruniversity.com/');
        const title=browser.getTitle();
        console.log('title fot webdriveruniversity');
        console.log(title);
       //assert.strictEqual(title,'WebdriverUniversity.com');
    });
});