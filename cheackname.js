//slice(-1); 

function checkName(name){

    if(typeof name !== 'string'){
        return 'invalid'
    }

    let lastLetter = name.slice(-1).toLowerCase();
    const checkNames = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w']
    let result = false;

    for(char of checkNames){
        if(char === lastLetter){
            result = true;
        }
    }

    return result ? 'Good Name' : 'Bad Name'
}

console.log(checkName())