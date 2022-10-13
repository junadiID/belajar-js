function sayHello(namaDepan, namaAkhir){
    const hello = `Hello ${namaDepan} ${namaAkhir}`
    return hello;
}

const result = sayHello("Junjun", "Junaedi");
document.writeln(`<p>${result}</p>`);

// score hitung

function getFinal(value) {
    if(value > 90 ) {
        return "A";
    } else if (value > 80) {
        return "B";
    } else if (value > 70) {
        return "C";
    } else if (value > 60) {
        return "D";
    } else {
        return "E";
    }
}

const nilaiMu = 90;

const nilai = getFinal(nilaiMu);
document.writeln(`<p>${nilai}</p>`);



// return true and false untuk mencari nilai

function isConten(array, cariNilai){
    for (const element of array) {
        if(element === cariNilai){
            return true;
        }
    }
    return false;
}

const array = [1,32,454,63435,646,6663,774,535,5,"hai"];
const search = "hai";
const found = isConten(array, search);
document.writeln(`<p>${found}</p>`);