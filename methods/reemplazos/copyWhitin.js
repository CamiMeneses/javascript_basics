/* Syntax
array.copyWithin(target, start, end)

target	Required. EL index que va a ser reemplazado
start	Optional. El index que se copia por defecto 0
end	Optional. El index donde va a parar de copiar por defecto es la longitud del array
*/


var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];

var result = fruits.copyWithin(2);// reemplaza desde la segunda posicion es decir apple, por defecto copia la primer posicion, sin repetir
console.log(result);
// [ 'Banana', 'Orange', 'Banana', 'Orange', 'Apple', 'Mango' ]

var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
var result2 = fruits.copyWithin(4);// reemplaza desde el index 4 es decir KIWI por defecto coge la primer posicion
console.log(result2);
//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Banana', 'Orange' ]

var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
var result3 = fruits.copyWithin(3, 2);// reemplaza desde la posicion 3 por la 2
console.log(result3);
//[ 'Banana', 'Orange', 'Apple', 'Apple', 'Mango', 'Kiwi' ]

var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya", "Melon"];
result4 = fruits.copyWithin(3, 0, 3);
console.log(result4);

// desde la posicion 3 voy a reemplazar, es decir desde Mango
//[3 "Mango", 4 "Kiwi", 5 "Papaya", 6 "Melon"]

// voy a reemplazar por los elementos desde el index 1 es decir Orange
//[1 "Orange", 2 "Apple,", 3 "Mango", 4 "Kiwi", 5 "Papaya", 6 "Melon"]

// pero voy a reemplazar solo 3 posiciones contando desde el index que escogi
// [3 "Mango", 4 "Kiwi", 5 "Papaya"]
// No puedo copiar el mismo index que cogi para reemplazar entonces papya se deja quieto

//[0 'Banana', 1 'Orange', 2 'Apple', 3 'Orange', 4 'Apple', 5 'papaya', 'Melon']

