const value1 = parseInt("1");
const value2 = 1;

const sum = value1 + value2;

document.writeln(`<p>${sum}</p>`);


document.writeln(`<p>${parseInt("1.1")}</p>`);
document.writeln(`<p>${parseFloat("1.1")}</p>`);
document.writeln(`<p>${Number("1.1")}</p>`);


const a = 1;
const b = 1;
const total = a.toString() + b.toString();
document.writeln(`<p>${total}</p>`);

// NAN 
document.writeln(`<p>${parseInt("salah")}</p>`);
document.writeln(`<p>${parseFloat("1.1text")}</p>`);

// Number() tidak akan mentolelir kesalahan pada data

document.writeln(`<p>${Number("salah")}</p>`);
document.writeln(`<p>${Number("1.1text")}</p>`);


// Operasi pada NaN

const first = Number("salah");
const totalNum = first + 100;
document.writeln(`<p>${isNaN(first)}</p>`);
document.writeln(`<p>${totalNum}</p>`);
