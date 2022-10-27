
function getPilihanKomputer(){
    const comp = Math.random();
    if(comp < 0.34 ) return  'gajah';
    if(comp >= 0.34 && comp < 0.67) return  'orang';
    return  'semut';   
};

function getHasil(comp, player) {
    if(player == comp ) return 'SERI';
    if(player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if(player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG!';
    if(player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG!';
};


function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'asset/' + gambar[i++] + '.png');
        if( i == gambar.length ) i = 0;
    }, 100)
};


const piihan = document.querySelectorAll('li img');
piihan.forEach(function(i){
    i.addEventListener('click', function(){
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = i.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);

        putar();

        setTimeout(function(){
            
        // ambil gambar komputer
        const imgKomputer = document.querySelector('.img-komputer');
        imgKomputer.setAttribute('src', 'asset/' + pilihanKomputer + '.png')

        const Tampil = document.querySelector('.info');
        Tampil.innerHTML = hasil;

        }, 1000);

    });

});


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     // ambil gambar komputer
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'asset/' + pilihanKomputer + '.png')

//     const Tampil = document.querySelector('.info');
//     Tampil.innerHTML = hasil;
//     // console.info('comp :' + pilihanKomputer);
//     // console.info('Player :' + pilihanPlayer);
// });



// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     // ambil gambar komputer
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'asset/' + pilihanKomputer + '.png')

//     const Tampil = document.querySelector('.info');
//     Tampil.innerHTML = hasil;
//     // console.info('comp :' + pilihanKomputer);
//     // console.info('Player :' + pilihanPlayer);
// });


// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    
//     // ambil gambar komputer
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'asset/' + pilihanKomputer + '.png')

//     const Tampil = document.querySelector('.info');
//     Tampil.innerHTML = hasil;
//     // console.info('comp :' + pilihanKomputer);
//     // console.info('Player :' + pilihanPlayer);
// });

