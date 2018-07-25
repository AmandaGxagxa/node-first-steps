function totalPhoneBill(calls){
  var change = calls.split(", ");
  var calls =[];
  var smses = [];

  console.log(change);
  for (var i= 0;i<change.length;i++){
  if(change[i] === "call"){
  calls.push(change[i]);
  }else if(change[i] ==="sms"){
    smses.push(change[i]);
  }

  }
var allCalls = calls.length * 2.75;
var allSms = smses.length* 0.65;
var total = allCalls + allSms;
  console.log("R" +total.toFixed(2))
  return "R" +total.toFixed(2);
}
var totalBill =totalPhoneBill('call, call, sms, call')
console.log(totalBill);
