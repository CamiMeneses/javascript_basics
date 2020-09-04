// https://www.youtube.com/watch?v=Z4TuS0HEJP8 Bluuweb ! 10 Cosas de JAVASCRIPT que debes conocer para React/Vue/Angular
// VAR VS LET VS CONST

var edad = 10
var edad = 20

console.log(edad) // 20 var me permite declarar dos veces la variable

if(true){
  var edad = 30
  console.log(edad)
}

// var modifica la variable incluso si esta dentro del if

let edadlet = 10
edadlet = 20 // 20 let solo me permite declarar una vez

if(true){
  let edadlet = 30
  console.log(edadlet)
}
// let no modifica la variable si esta dentro del if

const edadconst = 20 // No puedo cambiarla porque es una constante

if(true){
  let edadconst = 30
  console.log(edadlet)
}
// pasa igaul que el let, no modifica la variable si esta dentro del if


//FUNCIONES

function sumar (num){
  console.log(num)
}

sumar(num)
// funciones de flecha
const sumarDos = (num1, num2) => {
  return (num1 + num2)
}

const resultado = sumarDos(20, 30)

const sumar3 = (num1, num2) => (num1 + num2)

const sumar4 = (num = 10) => {
  return (num + 4)
}


//template string
const suma_numeros = (num1, num2) => {
  return `La suma es: ${num1 + num2}` // de esta manera se puede introcuir logica dentro de un string
}

const resultado_suma_numeros = suma_numeros(1, 2)
console.log(resultado_suma_numeros)

//objetos
const mascota = {
  nombre: 'Tom',
  edad: 10,
  vivo: true,
  caracteristicas: ['peludo','negro']
}

mascota.id =  1

console.log(mascota)
console.log(mascota.nombre)

const nombreMascota = mascota.nombre
console.log(nombreMascota)

//destructuring object
const {edad, nombre} = mascota
console.log(edad)


const web = {
  nombre: 'bluuweb',
  links: {
    enlace: 'www.bluuweb.cl'
  },
  redesSociales: {
    youtube: {
      enlace: 'youtube.com/bluuweb',
      nombre: ' bluuweb yt'
    }
  }
}
console.log(web["redesSociales"]["youtube"]["nombre"])
console.log(web.redesSociales.youtube.nombre)
const enlace = console.log(web.redesSociales.youtube.enlace)
console.log(enlace)

const {enlace, nombre} = web.redesSociales.youtube
console.log(enlace)
console.log(nombre)

//Fetch API
fetch('https://pokeapi.co/api/v2/pokemon')
  .then(res => res.json())
  .then(data => {
    //console.log(data)
    let arrayNombres = []
    data.results.forEach(element => {
      console.log(element.name)
      arrayNombres.push(element.name)
    });
    console.log(arrayNombres)
  })
  .catch(error => console.log(error))//atrapa errores

//Async y Await
const obtenerPokemones = async() => {
  try{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await res.json()
    //console.log(data.results)
  //map
    const arrayNombresMap = data.results.map(poke => poke.name)
    //console.log(arrayNombresMap)
  //filter
    const filterNombre = data.results.filter(poke => poke.name === 'bulbasaur')
    console.log(filterNombre)
  } catch (error) {
    console.log(error)
  }
}

obtenerPokemones()
