describe("isExisting,isSelected,isDisplayed commands",()=>{
    beforeEach(function(){
        browser.setWindowSize(1800,1200);
        browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
    });

    it("validate state of checkbox",()=>{
        const checkbox=$("//div[@id='checkboxes']//input[@value='option-1']");
        expect(checkbox.isExisting()).to.be.true;
        expect(checkbox.isSelected()).to.be.false;
        expect(checkbox.isDisplayed()).to.be.true;
        console.log("Is Existing:" + checkbox.isExisting() );
        console.log("Is selected:" + checkbox.isSelected() );
        console.log("Is Displayed:" + checkbox.isDisplayed() );
        browser.pause(5000);
    });
});