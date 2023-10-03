'use strict';

let num = prompt("Introduce un número");



    if (typeof num === null || num.trim() === "") {

    alert("has introducido un buen NULL perraco")
    
}

else if (!isNaN(num)) {
    alert("Has introducido el número " + num);
}

else if (typeof num === 'string') {
    alert("Has introducido una cadena de texto ")
}

