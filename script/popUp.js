// alert
// alert("Hello");

// Prompt
// const name = prompt("Siapa Nama Anda?");
// alert(`Hello : ${name}`);

// confirm
const masuk = confirm("Anda yakin mau masuk?");
if(masuk){
    const name = prompt("Siapa nama anda?");
    alert(`Hello ${name}`);
}else{
    alert("Bye bye");
}