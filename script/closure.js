function clousData (value){
    const owner = "Junjun";

    function add(param){
        console.info(owner);
        return value + param;
    }

    return add;
}

const addTo = clousData(2);
// function addTo(param){
//     console.info("junju");
//     return 2 + param;
// }

console.info(addTo(10));

console.info(addTo(20));


const addTen = clousData(10);

console.info(addTen(10));

console.info(addTen(20));


