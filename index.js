// https://scarletsky.github.io/2016/01/30/nodejs-process-excel/
const  XLSX = require('xlsx');
const utils = require('./utils');


const sourceData = utils.getJsonByPath('./output.xls');
const dataBase = utils.getJsonByPath('./output.xlsx');



const header=['姓名','年龄'];
const data=[{
  '姓名':123,
  '年龄':43
}];
utils.expertFile(header, data);

console.log('===执行成功======');