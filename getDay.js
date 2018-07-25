function getDay(thatDay){
var theDate = new Date(thatDay);
  var day = theDate.getDay;
 var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 //console.log(weekDays[theDate.getDay()]);
  return weekDays[theDate.getDay()];
}
const date = new Date('1992-04-01');

console.log('that day was ' + getDay(date));
