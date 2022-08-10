// calculate electricity bill
// for first 100 unit 5 taka per unit 
// for more than 100 unit 6 taka for every unit more than 100
// for more than 200 unit 7 taka for every unit more than 200

function electricityBill(unit){
    let bill;
    if(unit <= 100){
        bill = unit * 5;
    }
    else if(unit <= 200){
        const first100 = 100 * 5;
        const remaining = unit - 100;
        const remainingCost = remaining * 6;
        bill = first100 + remainingCost;
    }
    else{
        const first100 =100 * 5;
        const second100 = 100 * 6;
        const remaining = unit - 200;
        const remainingCost = remaining * 7;
        bill = first100 + second100 + remainingCost;

    }
    return bill;
}

const totalBill = electricityBill(250);
console.log(totalBill);