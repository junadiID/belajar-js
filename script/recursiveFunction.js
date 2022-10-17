
// tanpa recursive function
function factorial(value){
    let result = 1;
    for (let i = 1; i <= value; i++){
        result *= i;
    }

    return result;
}

console.info(factorial(9));


// menggunakan recursive function
function factorialRecursive(value){
    if(value === 1){
        return 1;
    } else {
        return value + factorialRecursive(value - 1);
    }
}

console.info(factorialRecursive(9));