'use strict';

/*10. Realiza un pequeño adivinador de manera que primero le pida al usuario un número y, después, otro
usuario diferente (supuestamente) deberá adivinarlo. El programa da pequeñas pistas al usuario que tiene que
adivinarlo indicando si el número buscado es más pequeño o más mayor que el introducido.
*/ 


let numeroAdivinar = parseInt(prompt("Introduce un número para que otro usuario adivine"));
l
let numero = false;

while(!numero) {
    let numeroAdivinado = parseInt(prompt("Adivina el número del usuario anterior"));
    if (numeroAdivinar == numeroAdivinado) {
        numero = true;
    }
}

alert("El número ha sido adivinado")
