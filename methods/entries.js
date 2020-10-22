var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.entries();

for (x of f) {
  console.log(x);
}

/*
[ 0, 'Banana' ]
[ 1, 'Orange' ]
[ 2, 'Apple' ]
[ 3, 'Mango' ]
*/
