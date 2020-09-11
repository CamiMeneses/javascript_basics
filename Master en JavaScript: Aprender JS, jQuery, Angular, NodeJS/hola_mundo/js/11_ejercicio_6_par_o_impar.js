'use strict'

/*
Mostrar si un numero es par o impar

1. Ventana prompt
2. Si no es valido que pida otra vez el numero
*/


var numero = parseInt(prompt("Introduzca un numero"))

if (isNaN(numero)){
  numero = parseInt(prompt("Introduzca un numero valido"))
}else if(numero%2 == 0){
  alert("El "+ numero + " es par")
}else{
  alert("El "+ numero + " es impar")
}


// Otra solucion: Esta solucion es mejor porque no te deja de preguntar si pones algo que no sea un numero
var number = parseInt(prompt("Ingresa un numero:"))

while(isNaN(number)){
  number = parseInt(prompt("Ingresa un numero:"))
}

if(number%2 == 0){
  alert("Es par")
}else{
  alert("Es impar")
}

