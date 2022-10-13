// break
document.writeln(`<p>Bilangan Genap</p>`);
let counter = 1;
while (true) {
    document.writeln(`<p>Perulangan Ke  ${counter}</p>`);
    counter++;

    if (counter > 10){
        break;
    }
}

document.writeln(`<br><br>`);

// continue
document.writeln(`<p>Bilangan Ganjil</p>`);
for(let angka = 1; angka <= 100; angka++){
    if(angka % 2 === 0){
        continue;
    }

    document.writeln(`<p>Perulangan ganjil-${angka}</p>`);
}