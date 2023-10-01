'use strict'

 /*Crea un script que pregunte al usuario por un número y determine si es par, impar, si es múltiplo de 3 o si
es múltiplo de 5. Después, se deberá mostrar el resultado en una línea.*/

                let usuarioNumero = parseInt(prompt("Introduce un número"));
                let par = "impar";
                let multiploTres = "no es múltiplo de 3";
                let multiploCinco = "no es múltiplo de 5";

                if (usuarioNumero % 2 == 0) {  
                par = "par";
                }       

                else if (usuarioNumero % 3 == 0) {
                  multiploTres = "es múltiplo de 3";
                }

                else if (usuarioNumero % 5 == 0) {
                  multiploCinco = "es múltiplo de 5";
                }

                alert("El número " + usuarioNumero + " es " + par + ", " + multiploTres + ", y " + multiploCinco + ".");