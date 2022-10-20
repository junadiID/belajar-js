function useStrictMode() {
    'use strict';
    const person = {
        firstName : "junjun"
    }

    // error
    with (person){
        console.info(firstName);
    }
}

useStrictMode();