'use strict'

 /* 1.-Crea un script que determine si un número introducido por el usuario es par o impar utilizando el
            operador condicional.*/
            var numeroUsuario =  parseInt(prompt("Introduce un número para averiguar si es par o impar"));

            if (numeroUsuario % 2 == 0) {
                alert('El número es par')
            } 
                else {
                    alert('El número es impar')
                }