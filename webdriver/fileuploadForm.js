const {Builder,By,} = require("selenium-webdriver");

const driver = new Builder()
   .forBrowser("firefox")
   .build();

async function fileuploadForm(){
    try{
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/file-form");
        await driver.findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys("/home/ad.rapidops.com/munnisha.sheik/Music/webdriver"+"/rd.jpg");
        await driver.findElement(By.id("submit")).click();
    } catch(error){
        console.log(error);
        
    }
}

fileuploadForm();