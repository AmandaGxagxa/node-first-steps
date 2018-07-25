function countAllPaarl(regNum){
var registrations = regNum.split(",");
  var paarl =[];
for(var r = 0 ;r < registrations.length;r++){
  if(registrations[r].trim().startsWith("CJ")){
     paarl.push(registrations[r].trim());
     }
}
  console.log(paarl);
return paarl.length;
}
var regiNum = countAllPaarl('CA 123, CJ 147, CJ456, CY 147')
console.log(regiNum)
