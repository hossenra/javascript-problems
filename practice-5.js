// muler dam
// for first two kg 30 taka per kg
// for more than two kg 25 taka per kg
// write a function to calculate total price based on given quantity + handle error


function mulaPrice(quantity){
    let price;
    if( quatnity <= 2){
        price = quatnity * 30;
        console.log(price);
    }
    else{
        price = quatnity * 25;
    }
    return price;
}

const totalPrice = mulaPrice(2);
console.log(mulaPrice);

