const person = {
    namaPendek : "Junjun",
    NamaPanjang : "Junaedi"
}

if ("namaPendek" in person){
    console.info(`data ada ${person["namaPendek"]}`);
} else{
    console.info("tidak ada");
}


const studen = {
    namaPendek : "Junjun",
    namaTengah : undefined,
    namaPanjang : "Junaedi"
}

if ("namaPanjang" in studen){
    console.info(`data ada ${studen.namaTengah}`);
} else{
    console.info("Hello student");
}

const namaku = [null, "Junjun", null];

const result = 0 in namaku;
document.writeln(`<p>${result}</p>`);