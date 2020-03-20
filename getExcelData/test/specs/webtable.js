describe("get wentables",function(){
    it("w3 schools page",()=>{
        browser.url("https://www.w3schools.com/html/html_tables.asp");
        browser.pause('1000');
        //*[@id='customers']/tbody/tr[3]/td[1]
        const beforeXpath= "//*[@id='customers']/tbody/tr[";
        const afterXpath="]/td[1]";
        for (let i=2;i<=7;i++){
            const actualXpath=beforeXpath+ i +afterXpath;
            const companyName=browser.$(actualXpath).getText();
            console.log(companyName);
        }
       })
});