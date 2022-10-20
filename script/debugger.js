function createName (firstName, middleName, lastName){
    // debugger;
    const fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}

const name = createName("Junjun", "Junaedi", "ID");

console.info(name);


// sum
function sum(...numbers){
    // debugger;
    let total = 0;
    for (const number of numbers ){
        total += number;
    }
    return total;
}

console.info(sum(1,2,3,4,5,6));