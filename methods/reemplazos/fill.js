var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.fill("Kiwi"));

//[ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]

//reemplaza todos por kiwi

/*
value	Required. The value to fill the array with
start	Optional. The index to start filling the array (default is 0)
end	Optional. The index to stop filling the array (default is array.length) SON POSICIONES, NO INDEX
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.fill("Kiwi", 2, 3));
//[ 'Banana', 'Orange', 'Kiwi', 'Mango' ]
