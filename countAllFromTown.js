function countAllFromTown(regNum, sepRegNum){
var sepList = regNum.split(",");
  var allTown = [];
  for(var i =0; i < sepList.length; i++){
  if(sepList[i].startsWith(sepRegNum)){
  allTown.push(sepList[i].trim());

  }

  }
  console.log(allTown);
return allTown.length;
}
var allFromCpt = countAllFromTown('CA 789,CA 123,CJ 147,CL 145,CA 852', 'CA')
console.log(allFromCpt);
