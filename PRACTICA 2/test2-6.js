'use strict'

   /*6. Crea un script que pida al usuario dos números y una operación (el carácter +,-,*o /). El script debe
resolver el resultado de la operación seleccionada por el usuario. */

                let num1 = parseInt(prompt("Introduce el primer número"));
                let num2 = parseInt(prompt("Introduce el segundo "));
                let  operador = prompt("Indroduce un operador entre los siguientes:  +,-,* , /");
                let  resultado;

                if (operador == "+") {
                    resultado = parseInt(num1 + num2);
                }

                else if (operador == "-") {
                    resultado = parseInt(num1 - num2);
                }

                else if (operador == "*") {
                    resultado = parseInt(num1 * num2);
                }

                else if (operador == "/") {
                    resultado = parseFloat(num1 / num2);
                }

                else {
                    alert("Has introducido un operador no válido, por favor vuelve a introducirlo");
                }

                alert("El resultado de la operación  '" + operador + "' entre " + num1 + " y " + num2  + " es " + resultado);
                

                