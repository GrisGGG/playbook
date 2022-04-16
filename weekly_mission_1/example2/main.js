//Example 2: Exportando funciones entre scripts con CommonJS

// node main.js

/*Aquí hacemos que el archivo logger se introduzca a la variable logger con "require"
así podemos usar objeots o partes del código dentro de este archivo
*/
const logger = require('./logger')

//Mandamos a llamar a la función  dentro del archivo logger, llamando a la variable, punto y el nombre del obejto o función 
//Para que estas funciones puedan ser llamadas, deben tener la palabra exports

logger.info('This is an informational message')
logger.verbose('This is a verbose message')