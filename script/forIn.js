// for in di object
const person = {
    NamaPendek : "Junjun",
    NamaTengah : "Junaedi",
    NamaPanjang : "Junjun Junaedi"

};

for (const property in person) {
    document.writeln(`<p>Property ${property} : ${person[property]}</p>`);
}


// for in di array

const nama = ["Ato", "ismat", "Jamal"];

for (const index in nama){
    document.writeln(`<p>Prperty ${index} : ${nama[index]}</p>`)
}