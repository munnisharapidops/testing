const {Builder,By,} = require("selenium-webdriver");

const driver = new Builder()
   .forBrowser("firefox")
   .build();

async function datepickerForm(){
    try{
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys("Feb 12, 2020");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys("Feb 12, 2020 - Feb 22, 2020");
        await driver.findElement(By.id("submit")).click();
    } catch(error){
        console.log(error);
        
    }
}

datepickerForm();