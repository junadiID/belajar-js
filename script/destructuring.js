const buah = ["Apel", "Semangka", "Jeruk", "Mengguku", "Pepaya", "Melon"];

const buah1 = buah[0];
const buah2 = buah[1];
const buah3 = buah[2];

// console.info(buah1);

// menggunakan destructuring array

// destructuring array
const [buah01, buah02, buah03, ...others] = buah;

console.table(buah01);
console.table(buah02);
console.table(buah03);
console.table(others);

// Mengambil data di Object

const person = {
    firstName : "Junjun",
    lastName : "Junaedi",
    address : {
        kota : "Sukabumi",
        provinsi : "Jawa Barat",
        negara : "Indonesia"
    },
    hobby : "Game",
    channel : "JunadiID"
};


const {firstName, lastName, address, hobby, channel} = person;


document.writeln(`

<p>Nama : ${firstName + " " + lastName}</p>
<p>Alamat : ${address.kota +"," +  address.provinsi + "," + address.negara}</p>
<p>Hobby : ${hobby}</p>

`);