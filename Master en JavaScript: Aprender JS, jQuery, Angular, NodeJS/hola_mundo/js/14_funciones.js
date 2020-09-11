'use strict'

//Funciones
//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

function calculadora(num1, num2, op, mostrar = false){
  var resultado = 0

  switch(op){
    case "+":
      resultado = num1 + num2
    break;
    case "-":
      resultado = num1 - num2
    break;
    case "*":
      resultado = num1 * num2
    break;
    case "/":
      resultado = num1 / num2
    break;
    default:
      resultado
    break;
  }

  if(mostrar == false){
    console.log(resultado)
  }else{
    document.write(num1 + " " + op + " " + num2 + "=" + resultado)
  }
}
