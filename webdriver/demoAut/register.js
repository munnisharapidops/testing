const {Builder,By,} = require("selenium-webdriver");

const driver = new Builder()
   .forBrowser("firefox")
   .build();

async function registrationPage(){
    try{
        await driver.get("http://newtours.demoaut.com/");
        await driver.findElement(By.xpath("//*[text()='REGISTER']")).click();
        await driver.findElement(By.name("firstName")).sendKeys("kalp");
        await driver.findElement(By.name("lastName")).sendKeys("shah");
        await driver.findElement(By.name("phone")).sendKeys("1234567899");
        await driver.findElement(By.id("userName")).sendKeys("Kalptest");
        await driver.findElement(By.name("address1")).sendKeys("rapidops");
        await driver.findElement(By.name("address2")).sendKeys("science city");
        await driver.findElement(By.name("city")).sendKeys("Ahmedabad");
        await driver.findElement(By.name("state")).sendKeys("gujarat");
        await driver.findElement(By.name("postalCode")).sendKeys("30009");
        const country= await driver.findElement(By.name("country"));
        await country.click();
        await driver.findElement(By.xpath("//*[@value='92']")).click();
        await country.click();
        await driver.findElement(By.name("email")).sendKeys("kalp.shah9@gmail.com");
        await driver.findElement(By.name("password")).sendKeys("Kalptest");
        await driver.findElement(By.name("confirmPassword")).sendKeys("Kalptest");
        await driver.findElement(By.name("register")).click();
        await driver.close();
       // await driver.close();
    } catch(error){
        console.log(error);
        
    }
}

registrationPage();