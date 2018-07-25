function transportFee(shifts){
if(shifts == "morning"){
return "R20";
}else if(shifts == "afternoon"){
return "R10";
}else{
return "free";
}

}
var shift = transportFee('morning')
console.log(shift)
