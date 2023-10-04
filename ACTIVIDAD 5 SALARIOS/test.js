'use strict';


    let nombre = prompt("Indica tu nombre");
    let apellido = prompt("Indica tus apellidos");
    let salario = parseFloat(prompt(" Indica el salario"));
    let edad = parseInt(prompt("Indica tu edad"));

    if (salario <= 2000 && salario >= 1000) {
        if(edad > 45) {
            salario*= 1.03;
        }
        else  {
            salario*=1.10;
        }
    }

    if (salario < 1000) {
        if(edad < 30) {
            salario = 1100;
        }
        else if(edad >= 30 && edad <=45) {
            salario*= 1.03;
        }
        else if (edad > 45) {
            salario*= 1.15;
        }
    }




    alert("Tus datos son los siguientes " + nombre + "//" +  apellido + "//"  +  salario + " //"  + "//"+ edad);

