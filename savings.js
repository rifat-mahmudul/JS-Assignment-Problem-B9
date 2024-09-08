function monthlySavings(array , livingCost){

    if(!Array.isArray(array) || typeof livingCost !== 'number'){
        return 'Invalid input';
    }

    let totalIncome = 0;

    for(payment of array){
        if(payment >= 3000){
            const tax = payment * 0.2;
            totalIncome += payment - tax;

        }

        else{
            totalIncome += payment
        }
    }

    let saving = totalIncome - livingCost;

    if(saving >= 0){
        return saving;
    }

    else{
        return 'earn more';
    }
}

const allPayments = [ 1000 , 2000 , 3000 ]
const number = 5400;

console.log(monthlySavings(allPayments, number));