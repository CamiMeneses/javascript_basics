//retornar un string al reves

function FirstReverse(str) {
  var reverseWord= str.split("").reverse().join(""); // reverse solo funciona con arrays
  return reverseWord; // "olleh"
}

// keep this function call here
console.log(FirstReverse("hola"));
