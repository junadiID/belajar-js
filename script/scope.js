// global scope
let hitung = 0;

// global scope function
function hiteMe(){
    // local scope hitME
    hitung++;

}

hiteMe();
hiteMe();

document.writeln(`<p>${hitung}</p>`);

// local scope latihan

function first() {
    let A = 10;
    document.writeln(A);
}

function second() {
    let B = "hello";
    document.writeln(B);
}

first();
second();

// Gabisa di akses var local scope
// document.writeln(A);  //error
// document.writeln(B); //error


// Nested Function Scope

function nested() {
    let nama = "Junjun";

    function name(){
        document.writeln(`<p>${nama}</p>`);
        let mal = "hallo";
    }

    name();
    console.info(mal);

}

nested();


