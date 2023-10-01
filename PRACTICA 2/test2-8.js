'use strict';

/**/ 

var pares; 

for(let i = 25; i >= 1 ; i--) {

    if (i % 2 == 0) {
        pares += " " +   i;


    }
}

alert("Los números pares entre 25 y 1 son : " + pares);
