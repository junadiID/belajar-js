const nilai = "B";

switch(nilai){
    case "A":
        document.writeln("<p>Wow anda lulus dengan baik</p>");
        break;
    case "B":
    case "C":
        document.writeln("<p>Wow anda lulus</p>");
        break;
    case "D":
        document.writeln("<p>Anda tidak lulus</p>");
        break;
    default:
        document.writeln("<p>Anda salah jurusan</p>");

}
