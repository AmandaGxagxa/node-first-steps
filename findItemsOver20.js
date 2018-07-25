function findItemsOver20(items){
var over20=[];
  for(var i =0; i< items.length;i++){
  if(items[i].qty > 20){
  over20.push(items[i]);
  }
  }
  console.log(over20);

  return over20.length;
}
var itemList =findItemsOver20([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
]);
console.log(itemList);
