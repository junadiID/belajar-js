// menggunakan let
let i = 20;

for (let i = 0; i < 10; i++){
    // local scope
    console.info(`Local ${i}`);
}

console.info(`Global ${i}`);




// menggunakan var
var j = 20;

for (var j = 0; j < 10; j++){
    // local scope
    console.info(`Local ${j}`);
}

console.info(`Global ${j}`);