'use strict'

/*
Calculadora:
-Pida dos numeros por pantalla
-Si metemos uno mal que nos los vuelva a pedir
-En el cuerpo de la pagina, en una alerta y por consola el resultado de
sumar, restar, multiplicar y dividir estas cifras
*/

var numero1 = parseInt(prompt("Ingrese el primer numero:"))
var numero2 = parseInt(prompt("Ingrese el segundo numero:"))

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
  numero1 = parseInt(prompt("Ingrese el primer numero:"))
  numero2 = parseInt(prompt("Ingrese el segundo numero:"))
}

var resultado = "La suma es :"+(numero1+numero2)+" <br/>"+
                "La resta es :"+(numero1-numero2)+" <br/>"+
                "La multiplicacion es :"+(numero1*numero2)+" <br/>"+
                "La division es :"+(numero1/numero2);

var resultado_alert = "La suma es :"+(numero1+numero2)+"\n"+
                "La resta es :"+(numero1-numero2)+"\n"+
                "La multiplicacion es :"+(numero1*numero2)+"\n"+
                "La division es :"+(numero1/numero2);
document.write(resultado);
alert(resultado_alert);
console.log(resultado_alert);
