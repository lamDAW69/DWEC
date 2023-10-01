'use strict';

/*9 Crea un script para mostrar el factorial de un número introducido por el usuario. Se deberá hacer
utilizando un bucle while*/ 


let numeroUsuario = parseInt(prompt("Introduce un número para calcular el facturial del mismo"));
let total = 1;
let i = 1; 
while(i <= numeroUsuario) {
    total *= i; 
    i++;
}

alert("EL factorial del número indicado es: " + total)
