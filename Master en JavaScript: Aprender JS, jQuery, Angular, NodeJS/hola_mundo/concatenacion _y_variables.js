'use strict' // si no le pongo esto podria definir una variable sin var
//de esta manera puedo mejorar las practicas
/*
alert("alerta desde otro archivo");
document.write("Hola mundo desde fichero externo")
*/

console.log("Muestra esto en la consola");

var pais = "España";
var continente = "Europa"
var pais_y_continente =  pais+' '+continente

pais = "Mexico"
continente = "America"
console.log(pais, continente, pais_y_continente);
alert(pais_y_continente)

//pruebas con let y var

var numero_var = 40;
console.log(numero_var); // 40

if(true){
  var numero_var = 50;
  console.log(numero_var); // 50
}

console.log(numero_var); // 50


// -------------------------
let numero_let = 40;
console.log(numero_let); // 40

if(true){
  let numero_let = 50;
  console.log(numero_let); // 50
}

console.log(numero_let); //40
