function isWeekday(day){
  var weekEnd = !day.startsWith("S");
  //console.log(weekEnd);
  return weekEnd;
}
var days = isWeekday('Monday')
console.log(days)
