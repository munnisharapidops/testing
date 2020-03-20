const filepath="/home/ad.rapidops.com/munnisha.sheik/Documents/sheet-data.xlsx";
let Excel=require('exceljs');
let workbook=new Excel.Workbook();

workbook.xlsx.readFile(filepath).then(function(){
    let worksheet = workbook.getWorksheet("Sheet1");
    worksheet.getCell('A1').value='kalp.shah@rapidops.com';
    const Email=worksheet.getCell('A1').value;

    worksheet.getCell('A2').value = 123456;
    const Password=worksheet.getCell('A2').value;
    
    const {Builder,By,} = require("selenium-webdriver");

    const driver = new Builder()
       .forBrowser("firefox")
       .build();
    
    async function exceldata(){
        try{
            await driver.get("https://kalp.salesmate.io/login.html#");
            await driver.findElement(By.name("email")).sendKeys(Email);
            await driver.findElement(By.name("password")).sendKeys(Password);
    
            await driver.findElement(By.id("login_btn")).click();
           
            await driver.close();
        } catch(error){
            console.log(error);
            
        }
    }
    
    exceldata();
    
});