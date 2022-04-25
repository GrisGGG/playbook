class User{
    constructor(user, username, bio, age) {
        this.name = name
        this.username = username
        this.bio = bio
        this.age = age
    }
}
class Trending_topic{
    constructor(name, tweets_amount, topic, date) {
        this.name = name
        this.tweets_amount = tweets_amount
        this.topic = topic
        this.date = date
    }
    getNameAndAmount () {
        return `Trending Topic:  ${this.name}, Cantidad de tweets: ${this.tweets_amount}`
    }
}
class hashtag{
    constructor(user, tweets_amount) {
        this.user = user
        this.tweets_amount = tweets_amount
    
    }}
        
        console.log("Ejercicio 3.2: Twitter");
        const twInformation = new Trending_topic("Javascript", 39200)
        console.log(twInformation.getNameAndAmount());