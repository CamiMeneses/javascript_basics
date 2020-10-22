/*
  currentValue	Required. The value of the current element
  index	Optional. The array index of the current element
  arr	Optional. The array object the current element belongs to
*/

var sum = 0;
var numbers = [10, 20, 30, 40];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
  console.log(sum);
}

/*
Suma el array
10
30
60
100
*/


var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunctionf);

function myFunctionf(item, index) {
  console.log(index + ":" + item);
}

/*
0:apple
1:orange
2:cherry
*/


var numbersx = [65, 44, 12, 4];
numbersx.forEach(myFunctionx)

function myFunctionx(itemx, indexx, arr) {
  arr[indexx] = itemx * 10;
  console.log(arr)
}

/*
[ 650, 44, 12, 4 ]
[ 650, 440, 12, 4 ]
[ 650, 440, 120, 4 ]
[ 650, 440, 120, 40 ]
*/
