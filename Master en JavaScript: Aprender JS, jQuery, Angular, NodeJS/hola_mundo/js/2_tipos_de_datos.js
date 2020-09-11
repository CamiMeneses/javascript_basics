'use strict'

//

var numero_string = "33"
var concatena = numero_string + 3

console.log(concatena) // 333

var suma = Number(numero_string) + 3

console.log(suma) // 36

var numero_float = "1.5"
var suma = Number(numero_float) + 2
console.log(suma) // 3.5
var suma = parseInt(numero_float) + 2
console.log(suma) // 3
var suma = parseFloat(numero_float) + 2
console.log(suma) // 3.5

var numero = 4
console.log(2 + numero) // 6
var numero_string = String(4)
console.log(2 + numero_string) // 24

//typeof para saber que tipo de variable es
console.log(typeof(numero_string))
