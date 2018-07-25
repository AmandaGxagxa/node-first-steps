function mostProfitableDepartment(dept){
 var objSale ={};
  var max =0;
  var name = ' ';
 for(var i=0;i<dept.length;i++){
  // var d = dept[i];
   var check = dept[i]//.department;
   //console.log(check)

   if(objSale[check.department]== undefined){
     objSale[check.department] =  0;
      }

        objSale[check.department] +=  check.sales;
 }

 //console.log(objSale);

  for( var q in objSale){
  if(objSale[q] > max ){
  max = objSale[q];
    name = q;
    console.log(name);
  }
  }
  return name;
}
var salesData =mostProfitableDepartment([
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
]);
console.log(salesData)
