function  fromWhere(carRegNum){
if(carRegNum.startsWith("CY")){
return "Bellville";
}else if(carRegNum.startsWith("CJ")){
return "Paarl";
}else if(carRegNum.startsWith("CA")){
return "Cape Town";
}else{
return "Some other place!"
}
}
var whereFrom =fromWhere('CJ')
console.log(whereFrom);
