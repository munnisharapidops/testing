const filepath="/home/ad.rapidops.com/munnisha.sheik/Documents/sheet-data.xlsx";
    let Excel=require('exceljs');
    let workbook=new Excel.Workbook();

    workbook.xlsx.readFile(filepath).then(function(){
        let worksheet = workbook.getWorksheet("Sheet1");
        
        worksheet.eachRow({ includeEmpty:true },function(row,rowNumber){
            console.log("Current Row :"+ rowNumber);
            row.eachCell({ includeEmpty: true},function(cell,colNumber){
                console.log("Cell Value="+ cell.value + "for cell [" + rowNumber + "]" + "[" + colNumber + "]");
            });
        });
    });


