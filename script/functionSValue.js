function sayHello(nama){
    document.writeln(`<P>Hello ${nama}</P>`)
}

sayHello("Ini");

const names = sayHello;
names("Junjun");


// callback parameter

let say = sayHello;

function giveMe(callback){
    callback("Junaedi");
}

giveMe(sayHello);
giveMe(say);