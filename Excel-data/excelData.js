const xlsx=require("xlsx");
const work_block=xlsx.readFile("/home/ad.rapidops.com/munnisha.sheik/Documents/sheet-data.xlsx",{cellDates:true});
const work_sheet=work_block.Sheets["Sheet1"];
const data=xlsx.utils.sheet_to_json(work_sheet);
//console.log(data);
// console.log(work_block.SheetNames);
// console.log(work_sheet);
const newdata=data.map(function(record){
    record.Net=20;
    return record;
});
//console.log(newdata);
 
//const new_work_book=xlsx.utils.
