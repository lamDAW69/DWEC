'use strict'

/*4.-Crea un script que pregunte al usuario por el número de un mes y muestre los días que tiene ese mes o un
mensaje de error en caso de número de mes incorrecto. Se deberá realizar mediante una sentencia switch.*/



                            let mesUsuario = prompt("Introduce un mes del año para saber cuántos días tiene");

                            switch (mesUsuario) {
                                case 'Enero':
                                alert("El mes de Enero tiene 31 días");
                                break;
                                
                                case 'Febrero':
                                alert("El mes de Febrero tiene 28 días");
                                break;

                                case 'Marzo' :
                                alert("El mes de Marzo tiene 31 días");
                                break;

                                case 'Abril' :
                                alert("El mes de Abril tiene 30 días");
                                break;

                                case 'Mayo' :
                                alert("El mes de Mayo tiene 31 días");
                                break;

                                case 'Junio' :
                                alert("El mes de Junio tiene 30 días");
                                break;

                                case 'Julio' :
                                alert("El mes de Julio tiene 31 días");
                                break;

                                case 'Agosto' :
                                alert("El mes de Agosto tiene 31 días");
                                break;
                                
                                case 'Septiembre' :
                                alert("El mes de Enero tiene 30 días");
                                break;
                                
                                case 'Octubre' :
                                alert("El mes de Octubre tiene 31 días");
                                break;
                                
                                case 'Noviembre' :
                                alert("El mes de Noviembre tiene 30 días");
                                break;
                                
                                case 'Diciembre' :
                                alert("El mes de Diciembre tiene 31 días");
                                break;

                                default: 
                                alert("Has introducido un mes incorrecto, vuelve a introducirlo")

                            }
