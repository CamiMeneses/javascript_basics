//mostrar la interseccion entre dos conjuntos

//-------
Set.prototype.interseccion = (otroConjunto){
  let conjuntoInterseccion = new Set;

  for (const e of otroConjunto) {
    if (this.has(e)){
      conjuntoInterseccion.add(e);
    }
  }
}


//-------------
var a = [1, 5, 3, 4],
    b = [1, 4]

var result = a.filter(function(e) {
    return b.indexOf(e) == -1
});

console.log(result);
