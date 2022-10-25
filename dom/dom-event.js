// methode
const p3 = document.querySelector('.p3');
function ubahWarna(){    
p3.style.backgroundColor = 'yellow';
}


// onclick
const p2 = document.querySelector('.p2');
p2.onclick = ubahBack;
function ubahBack(){
    p2.style.backgroundColor = 'orange';

}

// mouse event

p2.addEventListener('mouseenter', function(){
    p2.style.backgroundColor = 'orange';
    p2.style.width = '360px'
});

p2.addEventListener('mouseleave', function(){
    p2.style.backgroundColor = 'white';
    p2.style.width = '';

});


// add event listener
const tombol = document.querySelector('section#b p');

tombol.addEventListener('click', function(){

const ul = document.querySelector('section#b ul');
const li = document.createElement('li');
const textli = document.createTextNode('Item Baru');
li.appendChild(textli);
ul.appendChild(li);


});
