function deleteInvalids(array) {

   if (Array.isArray(array) === true) {
      let arra=[];
       for(let i=0; i<array.length; i++){
        
              if(typeof array[i]==='number' && !isNaN(array[i])){
                    
                     arra.push(array[i]);
              }
       }
       return arra;
   }
  return 'Please put the valid number';
}

const arr = deleteInvalids({num: [ 1 , 2 , 3 ]});
console.log(arr);
