// arrow function
// const sayHello = (name) => {
//     const say = `Hello ${name}`;
//     document.writeln(say);
// }

// sayHello("Junjun");

// arrow function tanpa block

document.writeln(`<br>`);

const hai = (names) => document.writeln(`Hello ${names}`);
const getSay = (names, value) => names + value;

hai("Junaedi");

document.writeln(`<br>`);
document.writeln(`Hello ${getSay(`Junjun`,`Junaedi`)}`);


// arrow function tanpa kurung parameter
// untuk 1 parameter saja 
const alamat = alamat => document.writeln(`<p>Alamat : ${alamat}</p>`);
alamat("Sukabumi");



// arrow function sebagai parameter

function giveMeName(callback){
    callback("Junjunr");
}


// anonymus function
// giveMeName(function (name){
//     document.writeln(`Hello ${name}`);
// })



// arrow function
giveMeName( name => document.writeln(`Hello ${name}`));
