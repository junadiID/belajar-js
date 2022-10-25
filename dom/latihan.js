const tombolA = document.getElementById('button');

const h1 = document.querySelector('h1');
const TAcakWarna = document.createElement('button');
TAcakWarna.setAttribute('type', 'button');

const textButton = document.createTextNode('Acak Warna');
TAcakWarna.appendChild(textButton);
h1.appendChild(TAcakWarna);


tombolA.after(TAcakWarna);

TAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});



const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
const r =  sMerah.value;
const g =  sHijau.value;
const b =  sBiru.value;
document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';

});


sHijau.addEventListener('input', function(){
const r =  sMerah.value;
const g =  sHijau.value;
const b =  sBiru.value;
document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';

});


sBiru.addEventListener('input', function(){
const r =  sMerah.value;
const g =  sHijau.value;
const b =  sBiru.value;
document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';

});
