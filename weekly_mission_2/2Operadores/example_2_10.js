//Ejemplo 11 : Uso de find paraa  encontrar el primer elementos de una lista que cumpla con lo que indiques

const ages =[24,22,19,25,32,35,18];
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: primera edad menos a 20 es:" + age);