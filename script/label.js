// loopi:
// for (let i = 0; i < 100; i++){
//     loopj:
//     for(let j = 0; j < 10; j++){
//         console.info(`${i} - ${j}`);
//     }
// }

// penggunaan continue di loop
loopi:
for (let i = 0; i < 10; i++){
    loopj:
    for(let j = 0; j < 100; j++){
        if(j > 10){
            continue loopi;
        }
        document.writeln(`<p>${i} - ${j}</p>`);
    }
}