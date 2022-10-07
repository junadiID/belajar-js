let parameter = null;


let data = parameter;
if(data === undefined || data === null){
    data = "Nilai Default";
}

console.info(`<p>${data}</p>`);


// nullish coalescing Operator
let param = "Juna";
data = param ?? "Nilai Default"
document.writeln(`<p>${data}</p>`);