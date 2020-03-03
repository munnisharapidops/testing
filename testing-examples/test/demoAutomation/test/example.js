//const assert=require('assert');
describe('google.com page',()=>{
    it('open page',async()=>{
        await browser.url('http://newtours.demoaut.com/');
    //    await  browser.pause(5000);
    //     const search=await $('.gLFyf');
    //     await search.setValue('css');
    //     await browser.elementSendKeys(search.elementId,'\n');
        const title = await browser.getTitle();
        console.log('title is' +title);
    //     let link = await $('.LC20lb');
    //    // console.log(link);
    //     link = await link.getText();
    //     console.log(link);
    //     assert.strictEqual(link,'CSS Tutorial - W3Schools')


    })
})