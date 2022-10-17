// object didalam method
// membuat object dengan method

const person = {
    name : "junjun",

    sayHello : function (name){
        // alert(`Hello ${name}`);
    }
};

person.sayHello("Jun");


// menambahkan method ke object

const orang = {
    names : "Juna"
}

orang.hello = function (names){
    document.writeln(`Hello ${names}`);
}


orang.hello("jun")