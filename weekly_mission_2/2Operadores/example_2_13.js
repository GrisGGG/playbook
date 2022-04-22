//Example 14: Uso de some, este métod calidará todos los elementos de la llista,

//lista de elementos
const bools = [true, true, false, true];
//Uso de some para ver si al menos uno de los elementos es false

const areSomeTrue = bools.some((b) => b === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue);