// DOM selction
// document.getElementById() //menghasilkan sebuah element sejajar

// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'gray';
// judul.innerHTML = "Junaedi";


// document.getElementsTagName() -> HTML Collections

// const param = document.getElementsByTagName('p');
// for(let i = 0; i < param.length; i++){
//     param[i].style.backgroundColor = 'gray';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';


// document.getElementsByClassName()
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini diubah dari js';



// querySelector() ->menghasilkan 1 element

// const  p4 = document.querySelector('#b p'); 
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');

// li2.style.color = "blue";
// li2.innerHTML = "Hai";



// querySelectorAll()

// const selec = document.querySelectorAll('p');

// for(i = 0; i < selec.length; i++){
//     selec[i].style.color = 'orange';
// }



// scope 

const section = document.getElementById('b');
const p6 = section.querySelector('p');
p6.style.backgroundColor = 'orange';
