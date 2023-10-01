'use strict';

let numeroUsuario;
let total = 0;

while (true) {
    numeroUsuario = parseInt(prompt("Introduce un número"));

    if (isNaN(numeroUsuario)) {
        alert("Por favor, ingresa un número válido.");
        continue; 
    }

    if (numeroUsuario === 0) {
        break; 
    }

    total += numeroUsuario; 
}

alert("El total de la suma es " + total);
