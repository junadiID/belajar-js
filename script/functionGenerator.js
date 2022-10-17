// function generator
function* createName(){
    yield "junjun";
    yield "junaedi";
}


const names = createName();
for (const name of names){
    console.info(name);
}


// function generator kompleks

// lazy
function* noGanjil(value){
    for( let i = 1; i <= value; i++){
        if (i %  2 === 1){
            yield i;
        }
    }
}

// eager
function noGanjilArray(value){
    const result = [];
    for( let i = 1; i <= value; i++){
        if (i %  2 === 1){
            console.info(`Yield ${i}`);
            result.push(i);
        }
    }
    return result;
}


const numbers = noGanjilArray(100);
// for (const nomor of numbers){
//     console.info(nomor);
// }

console.info(numbers.next().value);

// lazzy kompleks

