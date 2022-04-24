const user = {
    name: "Guadalupe Gachupin",
    nickname: "Guadalupe G",
    age: 29,
}

const post = {
    user: user.name,
    date_created: "1 april 2022",
    content : {
        text: "Este es una publicación acerca de los conejos",
        photo: true
    }
}

const biography = {
    name: "Guadalupe Gachupin",
    nickname: "Guadalupe G",
    date_birth: "1 november 1992",
    relationship_status: "single",
    getNameAndDateBirth: function () {
        return `user name: ${this.name}, fecha de nacimiento: ${this.date_birth}`
    }
}

console.log(user);
console.log(giography.getNameAndDateBirth());