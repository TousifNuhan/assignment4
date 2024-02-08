
function checkName(name) {
   
       if(typeof name==="string"){
       let lastWord=name.charAt(name.length-1);
       console.log(typeof lastWord);
        if(lastWord.toLowerCase()==='a'){
            return 'Good Name';
        }

        if(lastWord.toLowerCase()==='y'){
            return 'Good Name';
        }

        if(lastWord.toLowerCase()==='i'){
            return 'Good Name';
        }

        if(lastWord.toLowerCase()==='e'){
            return 'Good Name';
        }

        if(lastWord.toLowerCase()==='o'){
            return 'Good Name';
        }

        if(lastWord.toLowerCase()==='u'){
            return 'Good Name';
        }

        if(lastWord.toLowerCase()==='w'){
            return 'Good Name';
        }

        else{
            return 'Bad Name';
        }
       }
      return 'Invalid';
    }

    const names=checkName('salmaW');
    console.log(names);