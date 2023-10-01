'use strict'
 /*3.- . Crea un script que pregunte al usuario el número de hermanos y una cantidad. Si el usuario tiene tres
hermanos o más se aplicará un descuento del 15% a la cantidad, si tiene menos, un 5% y si no tiene
hermanos se mostrará la cantidad sin descuento*/

                    let usuarioHermanos = parseInt(prompt("Introduce el númerod de hermanos que tienes"));
                    let usuarioImporte = parseInt(prompt("Introduce el importe de tu compra"));
                    let importeFinal; 

                        if (usuarioHermanos >= 3) {
                            importeFinal = (usuarioImporte *  0.85);
                            alert("El precio final de tu compra es " + importeFinal); 
                        }
                            else if (usuarioHermanos < 3 && usuarioHermanos > 0 ) {
                                importeFinal = (usuarioImporte * 0.95);
                                alert("El precio final de tu compra es " + importeFinal); 
                            }

                            else {
                                alert("El precio final de tu compra es " + usuarioImporte); 
                            }
                        
