function password(obj) {

    const objs = obj;
    


    // for(const prop in objs){
    //          console.log(prop);
    // }

    if(!objs.hasOwnProperty('name')|| !objs.hasOwnProperty('birthYear')|| !objs.hasOwnProperty('siteName')){
     return 'Invalid'
    }
    let a = objs.birthYear.toString().length;
    if (a === 4) {

        if (Object.keys(objs).includes('name', 'birthYear', 'siteName')) {

            const pass = objs.siteName[0].toUpperCase() + objs.siteName.slice(1) + '#' + objs.name + '@' + objs.birthYear;
            return pass;
        }
        else{
            return 'Invalid';

        }
    }
  return 'Invalid';

}

const a = password({ name: "maisha", birthYear: 2002 });

console.log(a);



// (objs.name==='name')&&(objs.birthYear==='birthYear')&&(objs.siteName==='siteName')