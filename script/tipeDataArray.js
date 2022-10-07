let arrayKosong = [];

arrayNama = ["Junjun", "Juna", "Jatos"];


let nama = [];

nama.push("Hai");
nama.push("Junjun", "Juna", "Jatos");
nama.push("Ismat");

console.table(nama);

nama[2] = "Junaedi";

console.table(nama);
console.info(nama[0]);
console.info(nama[1]);

delete nama[0];
console.table(nama);

nama[0] = "Ini Nama ";
nama.push(1,2,3,4,5);
nama.push(["azis","farhan","jamet"]);


console.table(nama);