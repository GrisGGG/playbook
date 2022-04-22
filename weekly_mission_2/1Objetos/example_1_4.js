//Ejemplo 5:  Obejto con método que recibe parámetros

const myPet = {
    name : "Loki",
    sayHelloToMyPet: function (yourPet) {
        console.log(`${this.name} say's hello to ${yourPet}`);
    }
}

console.log("Ejemplo 5: Obejto con método que recibe parámetros");
myPet.sayHelloToMyPet("Morgan");