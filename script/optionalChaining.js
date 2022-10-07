let person = {
    address : {
        negara : "Indonesia"
    }
};

let country  = person?.address?.country;

if(person.address !== undefined && person.address !== null ){
    country = person.address.country;
}

document.writeln(`<p>${country}</p>`);

// optional chaining 
// cara simpel untuk pengecekan data undifined dan null


let cek  = person?.address?.negara;
document.writeln(`<p>${cek}</p>`);