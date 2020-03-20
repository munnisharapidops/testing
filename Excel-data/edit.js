function editExistingFile(xlFilePath) {
    var Excel = require("exceljs");// load exceljs module
    var workbook = new Excel.Workbook();
    //Read xlsx file and use then fuction to handle promise before executing next step
    workbook.xlsx.readFile(xlFilePath).then(function () {
        var worksheet = workbook.getWorksheet("Sheet1");
        //Use nested iterator to read cell in rows 
        //First iterator for finding row
        worksheet.eachRow(function (row, rowID) {
            console.log("Current Row:" + rowID);
            //Second iterator to read data from cell in row
            row.eachCell(function (cell, colID) {
                //print row number, column number and cell value at[row][col]
                console.log("Cell Value=" + cell.value + " for cell [" + rowID + "]" + "[" + colID + "]");              
                //condition to modify row and col data
               if(rowID>1 && colID==3){
                cell.value="New Result for OLDW";
               }
 
            });
        });
        workbook.xlsx.writeFile(xlFilePath);
    });
}
 
var xlFilePath="/home/ad.rapidops.com/munnisha.sheik/Documents/sheet-data.xlsx";
editExistingFile(xlFilePath);