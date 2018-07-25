function regCheck(regNum , regPlate ){
console.log(regNum.endsWith(regPlate));
  return regNum.endsWith(regPlate);
}
var regisNum = regCheck( '123 EC', 'EC' );
console.log(regisNum)
