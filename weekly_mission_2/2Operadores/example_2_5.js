// Example 6: Uso de map para convertir todos los nombres de una lista a mayúsculeas

const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) => 
    country.toUpperCase().slice(0,3) //El método slice obtiene sólo la longitud marcada del string
)

console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a matuscula y sólo obtener las tres primeras letras de este");
console.log(countries6);
console.log(countriesFirstThreeLetters);