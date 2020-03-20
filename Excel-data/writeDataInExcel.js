var filepath="/home/ad.rapidops.com/munnisha.sheik/Documents/print-data.xlsx";
function addRowToNewExcel(excelFilePath) {
let Excel=require('exceljs');
let workbook=new Excel.Workbook();
let worksheet = workbook.addWorksheet("Sheet1");
    let Name=1,Password=2;
   
     var rowData = [];
     rowData[Name] = 'kalp'; //where 1 is first column   i.e. A
     rowData[Password] = '12345';
     
   
     worksheet.addRow(rowData);
workbook.xlsx.writeFile(excelFilePath).then(function(){
    
   // worksheet.cell(2,1).string('kalp');

   console.log("success");

    
});
}
addRowToNewExcel(filepath);