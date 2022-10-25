
// dom manipulasi bag 1

// const judul = document.getElementById('judul');

// judul.innerHTML = 'Juna';

// const judul = document.querySelector('#judul');

// judul.style.backgroundColor = 'orange';

// set atribut
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'junjun');
// judul.getAttribute('id');
// const a = document.querySelector('section#a a');
// a.removeAttribute('href');


// add class

// classList.add() untuk menambah
// classList.remove(); untuk hapus
// classList.togle(); untuk menambah dan hapus
// classList.item(); untuk melihat class
// classList.contains(); untuk mencari nama class
// classList.replace(); untuk replace class yang ada

// const p2 = document.querySelector('.p2');

// p2.classList.add('warna');



// dom manipulasi bag 2


// document.createElement()
// document.createTextNode()
// node.appendChild(); simpan ke ahir
// node.insertBefore(); 
// parentNode.removeChild()
// parentNode.replaceChild();


const pBaru = document.createElement('p');
const textBaru = document.createTextNode('Paragraf Baru');

pBaru.style.backgroundColor = 'Orange';

// simpan tulisan ke dalam paragraf
pBaru.appendChild(textBaru);

// smpan pBaru di akhir Section A

const section = document.querySelector('section#a');
section.appendChild(pBaru);


// buat item baru di child
const liBaru = document.createElement('li');
const texsLi = document.createTextNode('Item Baru');

liBaru.appendChild(texsLi);
liBaru.style.backgroundColor = 'blue';
liBaru.style.color = 'white';

const getUl = document.querySelector('section#b ul');
const getUl2 = getUl.querySelector('li:nth-child(1)');

getUl.insertBefore(liBaru, getUl2);


// remove 
const sectionB = document.getElementById('a');
const link = document.getElementsByTagName('a')[0];

sectionB.removeChild(link);


// replace element
const judulBaru = document.getElementById('b');
const p4 = judulBaru.querySelector('p');
const h2 = document.createElement('h2');
const textku = document.createTextNode('Judul Baru');

h2.appendChild(textku);

h2.style.backgroundColor = 'yellow';

judulBaru.replaceChild(h2, p4);





