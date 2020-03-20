let Excel=require('exceljs');

let workbook=new Excel.Workbook();
workbook.Email="kalp.shah@rapidops.com";
workbook.password="123456";

workbook.xlsx.readFile("SampleExcel.xlsx").then(function(){
    let worksheet=workbook.getWorksheet("one");

    worksheet.eachRow({
        includeEmpty:true
    },
    function(row,number){
        currRow=worksheet.getRow(rowNumber);
        console.log("Email :" + currRow.getCell(1).value +", Password :" +currRow.getCell(2).value);
        console.log("Email :"+ row.values[1] +",Password :" + row.values[2]);
    })
})