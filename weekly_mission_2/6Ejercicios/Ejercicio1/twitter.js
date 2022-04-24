const user = {
    user: "Gris",
    username: "GrisGGG",
    bio:"Frontend developer en proceso",
    age: 29
}
const trending_topic = {
    name: "Mariana Rodríguez",
    tweets_amout: 10000,
    topic: "México",
    date: "24 april 2022",
    getNameAndDate: function () {
        return `Trending Topic:  ${this.name}, Cantidad de tweets: ${this.tweets_amout}`
    }
}
const hashtag = {
    name : "Nuevolandia",
    tweets_amount: 9000
}


console.log(user);
console.log(trending_topic.getNameAndDate);