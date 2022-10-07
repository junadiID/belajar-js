const orang = {};

// Menambah atu Mengubah
orang["nama"] = "Junjun Junaedi";
orang["alamat"] = "Indonesia";
orang["umur"] = 22;
console.table(orang);

// Menghapus
delete orang["umur"];

console.table(orang);

// object properti

const person = {
    nama : "Junjun person",
    "alamat lengkap" : "Indo",
    umur  : 20
};

console.table(person);

console.info(`Nama : ${person.nama}`);
console.info(`Alamat : ${person["alamat lengkap"]}`);
console.info(`Umur : ${person.umur}`);