function password(obj){

    if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4){
        return 'Invalid'
    }

    let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let passString = capitalSiteName + '#' + obj.name + '@' + obj.birthYear;

    return passString;
}