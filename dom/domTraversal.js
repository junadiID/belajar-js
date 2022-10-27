// Penelusuran DOM
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
//    card.classList.toggle('hidden');
// });



// DOM Traversal
const close = document.querySelectorAll('.close');

// for( let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function(event){
//         // close[i].parentElement.style.display = 'none';
//         event.target.parentElement.style.display = 'none';

//     });
// }

close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    });

});


const nama = document.querySelector('.nama');
console.info(nama.previousElementSibling);
console.info(nama.nextElementSibling);
console.info(nama.parentElement);
console.info(nama.parentNode);
console.info(nama.nextSibling);
