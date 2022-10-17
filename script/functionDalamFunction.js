
// function dalam function

function outer(){

    function inner(){
        document.writeln(`<p>Hello</p>`);
    }

    inner();
    inner();
}

outer();
