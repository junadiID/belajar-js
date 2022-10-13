function register(nama, gender = "UKNOWN"){
    document.writeln(nama);
    document.writeln(`<br>`)
    document.writeln(gender);
}

register();
document.writeln(`<br>`);
register("Junjun");
document.writeln(`<br>`);
register("Junjun", "Laki - Laki");