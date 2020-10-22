
var array = [10, 20, 30, 40, 50];
// method (return element > 10).
var found = array.find(function (element) {
  return element > 20;
});

//retorna solo el primer valor que encuentra
//30

console.log(found);
