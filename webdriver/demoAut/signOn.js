const {Builder,By,} = require("selenium-webdriver");

const driver = new Builder()
   .forBrowser("firefox")
   .build();

async function signOnPage(){
    try{
        await driver.get("http://newtours.demoaut.com/");
        await driver.findElement(By.xpath("//*[text()='SIGN-ON']")).click();
        await driver.findElement(By.name("userName")).sendKeys("kalpTest");
        await driver.findElement(By.name("password")).sendKeys("kalpTest");
        await driver.findElement(By.name("login")).click();
        await driver.close();
       // await driver.close();
    } catch(error){
        console.log(error);
        
    }
}

signOnPage();