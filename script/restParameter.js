// rest Parameter

function sum(name, ...data){
    let total = 0;
    for (const item of data){
        total += item;
    }

    document.writeln(`<p>Total ${name} is ${total}</p>`);
}

sum("Orange", 2, 4, 7, 2, 10, 6);
// sum("Yellow", 6, 0, 2, 4, 55, 3);
// sum("Blue", 0, 4, 453, 35, 52, 8);

// Spread Syntax
const values = [10,20,30,40];
sum("Values", ...values);


// old argument

function oldSum(){
    let jumlah = 0;
    for(const box of arguments){
        jumlah += box;
    }
    document.writeln(`<p>Total ${jumlah}</p>`);
}

oldSum(1,2,3,4,5,6,7,8,9,10);