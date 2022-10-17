

let say = function(name){
    let nilaiA = 100;
    let nilaiB = 50;
    if(name >= nilaiA ){
        document.writeln(`<p>Alhamdulillah</p>`);
    } else if(name >= nilaiB) {
        document.writeln(`<P>Mayan Nilai ${name}</P>`);
    } else {
        document.writeln(`<P>Gagal Ah</P>`)
    }
}

say(60);


// anonymous function di parameter

function giveName(callback){
    callback("Junjun Junaedi");
}

function alamat(callback){
    callback("Sukabumi");
}


giveName(function(ngaran){
    document.writeln(`<p>Nama Kamu : ${ngaran}</p>`);
});

alamat(function(alamat){
    document.writeln(`<p>Alamat : ${alamat}</p>`);
});

