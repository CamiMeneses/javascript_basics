var ages_all_adults = [32, 33, 90, 40];
var ages_one_child = [32, 8, 90, 40];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages_all_adults.every(checkAdult));
//true

console.log(ages_one_child.every(checkAdult));
//false

//Verifica si se cumple una condicion dada en una funcion
