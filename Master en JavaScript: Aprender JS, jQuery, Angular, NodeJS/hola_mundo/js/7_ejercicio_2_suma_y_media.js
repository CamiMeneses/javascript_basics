'use_strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado
*/

alert("Hola mundo con JS");

var suma = 0;
var contador = 0;

do{
  var numero = parseInt(prompt("Introduce numeros hasta que metas uno negativo", 0));// 0 valor que se muestra en la ventana por defecto

  if(isNaN(numero)){ // si esto no es un numero, su valor sera 0
    numero = 0
  }else if(numero >= 0){
    //suma = suma + numero;
    suma += numero;

    contador++;
  }
  console.log(suma);
  console.log(contador);
}
while(numero >= 0)

alert("La suma de todos los numeros es: "+suma);
alert("La media de todos los numeros es: "+(suma/contador));

