function createNewExcelFile(excelFilePath) {
    //excelFilePath: Provide path and file name for excel file
    var Excel = require('exceljs');// load exceljs module
    var workbook = new Excel.Workbook(); //create object of workbook
    //add sheet to workbook
    var newSheet = workbook.addWorksheet('TestData');
    //use write file function to create new file
    workbook.xlsx.writeFile(excelFilePath) 
        .then(function () {
            console.log("excel file created successfully");
        });
}
//To execute above function
var filePath = "/home/ad.rapidops.com/munnisha.sheik/Documents/new-sheet-data.xlsx";
createNewExcelFile(filePath);