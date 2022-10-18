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
    names : "Juna",
    alamat : "sukabumi"
}

orang.hello = function (alamat){
    document.writeln(`Hello ${alamat}`);
}


orang.hello("jampang");