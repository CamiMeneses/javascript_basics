'use strict'

// tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt("Ingrese un numero: "));

for(var i = 1; i <= 10; i++){
  document.write(numero+" x "+i +" = "+ (numero*i) + "<br/>");
  console.log(numero*i);
}

//Todas las tablas
for(var i = 1; i <= 10; i++){
  for(var j = 1; j <= 10; j++){
    document.write(i+" x "+j +" = "+ (i*j) + "<br/>");
  }
}
