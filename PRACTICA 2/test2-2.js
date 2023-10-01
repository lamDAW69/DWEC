'use strict'

     /* 2.-Crea un script que pregunte al usuario dónde vive y su edad. Si vive en Alicante y tiene entre 18 y 35 años
el script debe mostrar en pantalla que el usuario puede acceder al carnet de empresarios emprendedores en
caso contrario indicar que no puede acceder a él.*/
                let usuarioEdad = parseInt(prompt("Introduce tu edad"));
                let usuarioProvincia = prompt("Introduce en qué provincia vives");

                if (usuarioProvincia === 'Alicante' && (usuarioEdad >=  18 || usuarioEdad < 35)) {
                    let carnetEmpresario = prompt("Introcuce el número de carnet de empresario emprendedor")
                    alert('Carnet validado correctamente');
                }
                    else {

                        alert('Ingreso denegado')
                    }
            