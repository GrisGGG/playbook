//Example 13 Uso de finIndex, este método regresa la posición del primer elemento que cumpla con con la validación que indiques

const names13 = ['Explorer 1', 'Explorer 2', 'Explorer3'];
const result = names13.findIndex((name) => name.length > 7)

console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición " + result);