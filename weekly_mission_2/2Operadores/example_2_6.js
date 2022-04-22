//Ejemplo 7: Uso de firlter para filtrar una llista de elementos

const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const countriesContainingLand = countries7.filter((country) => //esta es una función
    country.includes('land')//Indicación para sólo filtrar elementos que incluyan "land"

)
console.log("Ejemplo 7: Uso de filter para filtrar elementos que incluyan Land");
console.log(countriesContainingLand);

const countriesEndsByay =countries7.filter((country) => country.endsWith('ay'))

console.log("Ejemplo 7: Paises que terminan con ay");
console.log(countriesEndsByay);