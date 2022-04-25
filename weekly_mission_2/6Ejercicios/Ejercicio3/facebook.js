class User{
    constructor(name, nickname, age) {
        this.name = name
        this.nickname = nickname
        this.age = age
    }
}

class Post{
    constructor(user, date_created, content){
        this.user = user
        this.date_created = date_created
        this.content = content
}}

class Biography{
    constructor(name, age, nickname, date_birth, relationship_status){
        this.name = name
        this.age = age
        this.nickname = nickname
        this.date_birth = date_birth
        this.relationship_status = relationship_status
    }
    getNameAndAge() {
        return `user name: ${this.name}, Edad: ${this.age}`
    }
}

console.log("Ejercicio 3.1: facebook");
const fbInformation = new Biography("Guadalupe", 29)
console.log(fbInformation.getNameAndAge());