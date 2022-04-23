//Example 9: Herencia entre dos clases

class Developer{

    constructor(name, mainLang, stack){
        this.name = name
        this.mainLang = mainLang
        this.stack = stack
    }

    get getName(){
        return this.name
    }
}

console.log("Ejemplo 9: Herencia entre dos clases");
const grisDev = new Developer ("Gris", "js", ["html", "css", "vuejs"])
console.log(grisDev);

//Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
//Podemos definir una clase vacia y rehusar todo los componentes de la clase padre

class LauchXStudent extends Developer{

}

const grisLaunchXDev = new LauchXStudent("Gris", "js", ["htmls", "css", "vuejs"])
console.log(grisLaunchXDev);
console.log(grisLaunchXDev.getName); //getter de la clase padre rehusadaen la clase hija

