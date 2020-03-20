describe("iframe test",()=>{
    beforeEach(function(){
        browser.setWindowSize(1800,1200);
        browser.url("/IFrame/index.html");
        browser.pause(5000);

    });

    it("test the clicking of a given button housed with in a iframe",()=>{
        const iframe=$("#frame");
        browser.switchToFrame(iframe);

        const findOutMore_Button = $("//*[text()='Our Products']");
        findOutMore_Button.waitForDisplayed();
        findOutMore_Button.click();
        browser.pause(5000);

    });
}); 