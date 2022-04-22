//Ejemplo 3: Objeto con diferentes propiedades

const myObject3 = {
    name : "Ramira",
    age: 2,
    nicknames:[
        "Rami", 
        "Pasita",
        "Pinche Vieja"
    ],
    address: {
        zip_code: "10000",
        street:"5 de Febrero",
        city:"Puebla"
    }
}

console.log("Ejemplo 3: Objeto con diferentes propiedades");
console.log(myObject3);
console.log(myObject3.name);
console.log(myObject3["address"]);