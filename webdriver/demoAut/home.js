const {Builder,By,} = require("selenium-webdriver");

const driver = new Builder()
   .forBrowser("firefox")
   .build();

async function homePage(){
    try{
        await driver.get("http://newtours.demoaut.com/");
        await driver.findElement(By.name("userName")).sendKeys("kalptest");
        await driver.findElement(By.name("password")).sendKeys("kalptest");
        await driver.findElement(By.name("login")).click();
        await driver.close();
    } catch(error){
        console.log(error);
        
    }
}

homePage();