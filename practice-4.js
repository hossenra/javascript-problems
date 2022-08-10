// count the average of all the numbers that is divisible by 3 from 1 - n;

function average(n){
    let count = 0, sum = 0;
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0){
            sum = sum + i;
            count = count + 1;
        }
    // console.log(i);
    }
    const avg = sum / count;
    return avg;
}

const result = average(10);
console.log(result);
