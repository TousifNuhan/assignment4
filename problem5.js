function monthlySavings(arr, livingCost) {


    if (!Array.isArray(arr)) {
        return 'Invalid Input';
    }
    if (typeof livingCost !== 'number') {
        return 'Invalid Input';
    }
   
   moneyBelow3000=0;
   moneyUpper3000=0;

    for(const money of arr){

          if(money>=3000){
            moneyUpper3000=money+moneyUpper3000;
          }
          else if(money<3000){
                moneyBelow3000=money+moneyBelow3000;
               
          }
    }
    let total=moneyBelow3000+moneyUpper3000-moneyUpper3000*(20/100);
   const totalSavings=total-livingCost;

   if(totalSavings>=0){
    return totalSavings;
   }
   else{
    return 'Earn More';
   }

}
const cost = monthlySavings(100, [ 900 , 2700 , 3400]);
console.log(cost);