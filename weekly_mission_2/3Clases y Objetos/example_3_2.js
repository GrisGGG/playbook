//Ejemplo3: Instanciar un objeto con atributos

class Student {
    //El constructor nos permite instanciar un objeto y asignale atributos, this nos ayuda a realizar est.

    constructor(name, age, subjects){
        this.name = name
        this.age = age
        this.subjects = subjects
    }
}

// Crear un objeto de la clase Studentn(esto se le llama instanciación)

const grisStudent = new Student("Gris", 29, ["JS"])
console.log("Ejemplo 3: Instanciar un objeto con atributos");
console.log(grisStudent);