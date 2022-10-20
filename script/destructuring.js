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

// dilakukan destracturing
// const {firstName, lastName, address : {kota, provinsi, negara } , hobby, channel} = person;

// tidak di destructuring
const {firstName, lastName, address , hobby, channel} = person;





document.writeln(`

<p>Nama : ${firstName + " " + lastName}</p>
<p>Alamat : ${address.kota +","+ address.provinsi + "," + address.negara}</p>
<p>Hobby : ${hobby}</p>

`);


// destructuring di function parameter object

{

    function displayMakanan({firstName,lastName,address}){
        console.info(firstName);
        console.info(lastName);
        console.info(address);
    };

    const person = {
        firstName : "Ismat",
        lastName : "Sanudin",
        address : "Jakarta"
    };

}
displayMakanan(person);

// array destructuring
console.info("array destructuring");

// function sum(array){
//     return array[0] + array[1];
// }

function sum([first, second]){
    return first + second;
}

console.info(sum([10, 10]));
console.info(sum([20, 10]));


// default value array
console.info("default Value Array");
{
    const name = ["Jun", "juna", ];
    const [firstName, lastName, hobby = "Ngoding"] = name;

    console.info(firstName);
    console.info(lastName);
    console.info(hobby);

}

// default value Object
console.info("default Value Object");
{
    const person = {
        firstName : "Abdul",
        lastName : "Malik",

    };

    const {firstName, lastName, hobby = "Desain"} = person;

    console.info(firstName);
    console.info(lastName);
    console.info(hobby);

}


// mengubah nama variabel 
console.info("Mengubah nama variabel");
{
    let {
        firstName : namaDepan,
        lastName : namaAhir,
        hobby : KesuKaan = "Desain",
    } = person;

    console.info(namaDepan);
    console.info(namaAhir);
    console.info(KesuKaan);


}