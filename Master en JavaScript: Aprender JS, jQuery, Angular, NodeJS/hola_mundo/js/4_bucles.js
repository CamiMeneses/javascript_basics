'use strict'
//for
var numero = 100;

for(var i =0; i <= numero; i++){
  console.log("Vamos por el numero "+ i);
}

//while
var year = 2018;

while(year <= 2030){
  console.log("Estamos en el año: "+ year)
  year++;
}

while(year != 1991){
  console.log("Estamos en el año: "+ year)

  if(year == 2000){
    break;
  }

  year--;
}

// Do while
var years = 30

do{
  alert("solo cuando sea diferen a 20");

  years--;
}while(years > 25)
