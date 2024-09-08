function deleteInvalids(array){

    if(Array.isArray(array) !== true){
        return 'Invalid Array';
    }


    let newArray = [];

    for(const arr of array){
        if(typeof arr === 'number' && isNaN(arr) === false){
            newArray.push(arr);
        }
    }

    return newArray;
}