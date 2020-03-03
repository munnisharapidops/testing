const {Builder,By,} = require("selenium-webdriver");

const driver = new Builder()
   .forBrowser("firefox")
   .build();

async function supportPage(){
    try{
        await driver.get("http://newtours.demoaut.com/");
        await driver.findElement(By.xpath("//*[text()='CONTACT']")).click();
        await driver.findElement(By.xpath("//a[@href='mercurywelcome.php']")).click();
        await driver.close();
       // await driver.close();
    } catch(error){
        console.log(error);
        
    }
}

supportPage();