// Arrow function di object
// tidak bisa membuat data generator di arrow
const person = {
    name : "Junjun",
    
    sayHello : (name) => {
        console.info(`Hello ${name}`);

        // tidak bisa menggunakan this di anonymus function
        console.info(this); //window
        // tidak bisa mengakses name person karena arrow function
        console.info(`Hello ${name} my name is ${this.name}`); //window
    } 
};

person.sayHello("Juna");