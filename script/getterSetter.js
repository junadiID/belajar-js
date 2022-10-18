const person = {
    firstName : "Junjun",
    lastName : "Junaedi",

    // cara biasa tanpa get dan setter
    // fullName : function () {
    //     return `${this.firstName} ${this.lastName}`;
    // },

    // untuk menggabungkan parameter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // untuk set supaya datanya bisa di edit
    set fullName(value){
        const array = value.split(" ");
        this.firstName = array[0];
        this.lastName = array[1];
    }

};

// person.firstName = "Ju"
// console.info(person.fullName());

person.firstName = "Ramdan"

console.info(person.fullName);

person.fullName = "ismat rahmar"

console.info(person.fullName);