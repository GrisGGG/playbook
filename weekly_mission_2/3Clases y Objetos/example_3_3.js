//Ejemplo 4: Métodos en los objetos

class Repository {
    
    constructor (name, author, language, stars){
        this.name = name
        this.author = author
        this. language = language
        this.stars = stars
    }
    getInfo(){ //Es una función que ejecutará cualquier objeto instanciado de esta clase
        return `Repository ${this.name} has ${this.stars} stars`
    }
}

console.log("Ejemplo 4: mÉTODOS EN LOS OBJETOS");
const myRepo = new Repository("LaunchX", "GrisGGG", "JS", "3")

console.log(myRepo.getInfo());