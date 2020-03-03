const {Builder,By,} = require("selenium-webdriver");

const driver = new Builder()
   .forBrowser("firefox")
   .build();

async function dropdownForm(){
    try{
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form");
        await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button")).click();
       // select1.click();
        await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
        await driver.findElement(By.xpath("//nb-option[@value='2']")).click();
        await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button")).click();
        // //select1.click();
        // await driver.findElement(By.xpath('//select[@formcontrolname="select2"]/option[@value="0"]')).click();
        // await driver.findElement(By.xpath('//select[@formcontrolname="select2"]/option[@value="2"]')).click();

        await driver.findElement(By.xpath("//nb-select[@formcontrolname='select3']/button")).click();
         await driver.findElement(By.xpath("//nb-option[@value='3']")).click();
         await driver.findElement(By.xpath("//nb-select[@formcontrolname='select3']/button")).click();

        // await driver.findElement(By.xpath("//nb-select[@formcontrolname='select4']/button")).click();
        // await driver.findElement(By.xpath("//select[@formcontrolname='select4']/option[@value='saab']")).click();
        // await driver.findElement(By.xpath("//nb-select[@formcontrolname='select4']/button")).click();

        //await driver.findElement(By.name("submit")).click();
        
    } catch(error){
        console.log(error);
        
    }
}

dropdownForm();