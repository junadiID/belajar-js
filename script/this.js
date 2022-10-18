console.info(this);

function sample(){
    console.info(this);
    function inner(){
        console.info(this);
    }

    inner();
}

sample();


// this di object method
const person = {
    name : "Junjun",
    sayHello : function (name){
        console.info(`Hello ${name} my name is ${this.name}`);
    }

    
};

person.sayHello("bud");
person.sayHello("jamrud");
