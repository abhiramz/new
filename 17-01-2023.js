//closure a function along wiht its environment

function outerfunction() {
    let outervariable = 25;
    return function innerfunction() {
        return outervariable;

    }
}
let result = outerfunction ();
console.log("result : ",result);
console.log("result : ",result);

// let innerfunction function innerfunction() {
// return outer variable;
//}

//console.log("innerfunction : ",innerfunction);
//console.log("innerfunction() : ",innerfuncton());

//fibanocci series
//0 1 1 2 3 5 8 ......

function fibanocci(limit) {
    let a= 0;
    console.log(a);
    let b = 1;
    console.log(b);

    let sum = 0;

    while (sum < limit) {
        sum = a + b ;
        console.log(sum);
        a = b;
        b = sum;
    }
}

