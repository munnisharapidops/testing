describe("Test the various WebdriverIO Wait COmmands",()=>{
    beforeEach(function(){
        browser.url("http://webdriveruniversity.com/");
    });
    // it("Test waitForExist",()=>{
    //     const clickByXpathSelector=$('//h1[text()="AJAX LOADER"]/..');
    //     clickByXpathSelector.click();
    //     browser.switchWindow("WebDriver | Ajax-Loader");

    //     //wait for an element for the provided amount of milliseconds to be present within the DOM.
    //     const clickMeButton=$('#button1');
    //     clickMeButton.waitForExist(10000);
    //    // clickMeButton.click();
    // });//test will fail..... even though its in the DOM doesnt mean it clickable

    // it("Test waitForDisplayed",()=>{
    //     //https:webdriver.io/docs/api/element/waitForDisplayes.html
    //     const clickByXpathSelector=$('//h1[text()="AJAX LOADER"]/..');
    //     clickByXpathSelector.click();
    //     browser.switchWindow("WebDriver | Ajax-Loader");

    //     //wait for an element for the provided amount of milliseconds to be present within the DOM.
    //     const clickMeButton=$('//*[text()="CLICK ME!"]/..');
    //     clickMeButton.waitForDisplayed(10000);
    //     clickMeButton.click();
    // });//test will pass.....

    it("Test WaitForEnabled",()=>{
        //https://webdriver.io/docs/api/element/waitForEnabled.html
        const clickByXpathSelector=$('//h1[text()="AJAX LOADER"]/..');
        clickByXpathSelector.click();
        browser.switchWindow("WebDriver | Ajax-Loader");

        const clickMeButton=$('//*[text()="CLICK ME!"]/..');
        //wait for an  element (selected by css selector)for of milliseconds to be (dis/en) present within the DOM.
        //clickMeButton.waitForEnabled(10000,true); //will check whether the element is enabled and wait  for it to turn false (become Disabled) - will cause the test to fai;
         clickMeButton.waitForEnabled(10000,false);//will check whether the element is not enabled - will also fail

        // //true:waits for element to become disabled- this test will fail
        // browser.pause(8000);
        // clickMeButton.waitForEnabled(10000,true);
        // clickMeButton.click();

        // //false:waits forelement to become enabed - this test will pass
        // browser.pause(8000);
        // clickMeButton.waitForEnabled(10000,false);
        // clickMeButton.click();
    }); // test will fail

    it("Test fixed TimeOut",()=>{
        //https://webdriver.io/docs/api/browser/pause.html
        const clickByXpathSelector=$('//h1[text()="AJAX LOADER"]/..');
        clickByXpathSelector.click();
        browser.switchWindow("WebDriver | Ajax-Loader");

        const clickMeButton=$('//*[text()="CLICK ME!"]/..');
        browser.pause(12000);
        clickMeButton.click();
    });//test will pass
})