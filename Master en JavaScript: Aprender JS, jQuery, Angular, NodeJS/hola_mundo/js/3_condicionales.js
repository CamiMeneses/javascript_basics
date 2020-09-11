'use strict'

var edad1 = 30;
var edad2 = 30;

if(edad1 > edad2){
  console.log(edad1 + " es mayor que " + edad2)
}
else if(edad1 == edad2){
  console.log("Las edades son iguales")
}else{
  console.log(edad1 + " es menor que " + edad2)
}


//switch

var edad = 18;
var imprime = "";

switch(edad){
  case 18:
    imprime = "Acabas de cumplir la mayoria de edad";
  break;
  case 25:
    imprime = "Ya eres un adulto";
  break;
  case 40:
    imprime = "Crisis de los cuarenta";
  break;
  case 75:
    imprime = "Eres ya un anciano";
  break;
  default:
    imprime = "Tu edad es neutra"
  break;
}

console.log(imprime);
