const nilai = 75;
let ucapan;

if(nilai >= 75){
    ucapan = "Selamat anda lulus";
} else {
    ucapan = "Anda tidak lulus";
}

console.info(`<p>${ucapan}</p>`);


// ternary opearator
const hasil = nilai >= 75 ? "Selamat anda lulus" : "Anda tidak lulus";
document.writeln(`<p>${ucapan}</p>`);