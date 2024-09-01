function calculateMoney(ticketSale){

    const ticketPrice = 120;
    const securityCost = 500;
    const stafCost = 50;
    const totalCost = (ticketSale * ticketPrice) - (securityCost + (8 * stafCost));

    if(totalCost < 0){
        console.log("Invalid Number");
    }

    else{
        console.log(totalCost);
    }

}

calculateMoney();