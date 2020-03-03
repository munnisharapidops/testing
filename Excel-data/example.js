const filepath="/home/ad.rapidops.com/munnisha.sheik/Documents/sampleExcelData.xlsx";
let Excel=require('exceljs');
let workbook=new Excel.Workbook();

workbook.xlsx.readFile(filepath).then(function(){
    let worksheet = workbook.getWorksheet("Sheet1");
    worksheet.getCell('A5').value = 1234567890;
    //worksheet.getCell[5][1].value = 1234567890;
    worksheet.getCell('A6').value = 'hello everyone..!';
    worksheet.getCell('A7').value = new Date(2020,03,03);
    worksheet.getCell('A8').value = {
        text: 'www.google.com',
        hyperlink: 'http://www.google.com',
        tooltip: 'www.google.com'
      };
    //   const num= worksheet.getCell('A5').value;
    //   console.log(num);
    worksheet.eachRow({ includeEmpty:true },function(row,rowNumber){
        console.log("Current Row :"+ rowNumber);
       // let cell = worksheet.getCell('num');
        row.eachCell({ includeEmpty: true},function(cell,colNumber){
           // let cell1 = worksheet.getCell('num');
          //  console.log( cell.value workbook.getCell(cell).value );
            console.log(  cell.value);
        });
    });
});