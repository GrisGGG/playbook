// 1. Creación de un objeto con propiedades

let myCar = new Object(); // Creación de un objeto
myCar.make = 'Ford'; // Guardando un valor dentro del objeto creado
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar) // Imprimiendo objeto

// 2. Declaración de un objeto con variables locales y públicas

const myModule = (() => {

// Variables de contexto local
 const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
 const privateBar = [1,2,3,4]
 const baz = "Soy un valor que va a ser expuesto"

// Variable para guardar las variables locales
 const exported = {
   publicFoo: "Valor público, pueden verme desde donde me llamen",
   publicBar: "Otro valor público",
   	publicBaz: baz
 }

// Exposición de variables locales
 return exported
})()

console.log(myModule)

//Creado mi propio objeto

let myPet = new Object();
myPet.name = 'Ramira';
myPet.age = "1.9";

console.log(myPet);

//Creado un módulo

const theModule = (() =>{

  const silenceType = "Soy un valor que se usa dentro de este objeto."
  const expuesType = "Soy un valor expuesto";

  const objetoExpuesto = {
    onePublicDate: "Hola, soy parte de un objeto dentro de un modulo",
    secondPublicDate: "El siguiente dato llamara a una variable dentro del módulo",
    thirdPublicDate: expuesType

  }

  return objetoExpuesto
})()
console.log(theModule);