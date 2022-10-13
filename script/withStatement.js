// tanpa with statment

const person = {
    nama : "Junjun",
    namaTengah : "Junaedi",
    namaPanjang : "Junjun Junaedi"
}

document.writeln(`<p>${person.nama}</p>`);
document.writeln(`<p>${person.namaTengah}</p>`);
document.writeln(`<p>${person.namaPanjang}</p>`);

// Menggunakan with statement

with (person) {
    document.writeln(`<p>${nama}</p>`);
    document.writeln(`<p>${namaTengah}</p>`);
    document.writeln(`<p>${namaPanjang}</p>`);
}