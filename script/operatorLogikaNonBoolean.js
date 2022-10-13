


// operator OR
console.info("Hello" || "");
console.info("" || []);
console.info("0" || "NOL");
console.info(0 || "NOL");
console.info(null || "null");
console.info(undefined || "UNDIFINED");
console.info(0 || false);

const person = {
    namaPendek : "Junjun",
    namaPanjang : "Junaedi"
};

const nama = person.namaPendek || person.namaPanjang;
document.writeln(`<p>${nama}</p>`);

const orang = {
    namaPendek : undefined,
    namaPanjang : "Junaedi"
};

const cek = orang.namaPendek ?? orang.namaPanjang;
document.writeln(`<p>${cek}</p>`);


// Operato AND
console.info("Hello" && "");
console.info("" && []);
console.info("0" && "NOL");
console.info(0 && "NOL");
console.info(null && "null");
console.info(undefined && "UNDIFINED");
console.info(0 && false);

const jurusan = {
    jurusan : "Teknik Informatika",
    prodi   : "Informatika"
};

const check = jurusan.jurusan && jurusan.prodi;
document.writeln(`<p>${check}</p>`);