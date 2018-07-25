function findItemsOver(list, treshold){
  var tresh =[]
for(var i = 0; i < list.length; i++){
if(list[i].qty > treshold){
tresh.push(list[i])
}
}
console.log(tresh);
return tresh.length
}
var results = findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},]
, 30)
console.log(results);
