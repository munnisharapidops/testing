describe("jpetstore",function(){
    it("get data",()=>{
        browser.url("https://jpetstore.cfapps.io/catalog");
       
        const fish=browser.$("div#SidebarContent > a:nth-of-type(1) > img");
        fish.click();
        browser.switchWindow('JPetStore Demo');
       //div[@id='Catalog']/table//td[.='Angelfish']
        //div[@id='Catalog']/table//td[.='Tiger Shark']
        //div[@id='Catalog']/table//td[.='Koi']
        //div[@id='Catalog']/table//td[.='Goldfish']
        browser.pause('1000');
        //browser.setWindow('JPetStore Demo');
        // const filepath="/home/ad.rapidops.com/munnisha.sheik/Documents/jpetStore.xlsx";
        // function addRowToNewExcel(excelFilePath) {
        // let Excel=require('exceljs');
        // let workbook=new Excel.Workbook();
        // let worksheet = workbook.addWorksheet("Sheet1");
        // let Name=1,Password=2;
        
        // var rowData = [];
        // rowData[Name] = 'kalp'; //where 1 is first column   i.e. A
        // rowData[Password] = '12345';
            
        
        // worksheet.addRow(rowData);
        // workbook.xlsx.writeFile(excelFilePath).then(function(){
            
        // // worksheet.cell(2,1).string('kalp');

        // console.log("success");

            
        // });
        // }
        // addRowToNewExcel(filepath);
       })
});