var ages = [3, 10, 19, 20];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.findIndex(checkAdult));

//19 Solo el primero que encuentre

