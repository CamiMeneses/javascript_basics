'use strict'

/* NOMBRES DE VARIABLES
  Identifiers are names.

  In JavaScript, identifiers are used to name variables (and keywords, and functions, and labels).

  The rules for legal names are much the same in most programming languages.

  In JavaScript, the first character must be a letter, or an underscore (_), or a dollar sign ($).

  Subsequent characters may be letters, digits, underscores, or dollar signs.

  NOMBRES COMPUESTOS

  Hyphens:

    first-name, last-name, master-card, inter-city.

    Hyphens are not allowed in JavaScript. They are reserved for subtractions.

  Underscore:

    first_name, last_name, master_card, inter_city.

  Upper Camel Case (Pascal Case):

    FirstName, LastName, MasterCard, InterCity.

  Lower Camel Case:

    JavaScript programmers tend to use camel case that starts with a lowercase letter:

    firstName, lastName, masterCard, interCity.
*/

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
