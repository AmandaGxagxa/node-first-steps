function countRegNumber(regNum){
var numList = regNum.split(',');

 return numList.length;

}
var list = countRegNumber('CJ 123, CY 152, CL 152')
console.log(list);
