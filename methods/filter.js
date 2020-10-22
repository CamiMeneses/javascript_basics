var ages = [32, 33, 16, 40];


function checkAdult(age) {
  return age >= 18;
}

var edad = ages.filter(checkAdult)

console.log(edad);
