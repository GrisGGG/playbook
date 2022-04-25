class ProfileUser {
    constructor(user, lastName, address, paymentType){
        this.user = user
        this.lastName = lastName
        this.address = address
        this.paymentType = paymentType
    }
    getNameAndPayment(){
        return `Nombre: ${this.user} payment: ${this.paymentType}`
    }
}

class Travel{
    constructor(paymentType, last, from, destinity){
        this.paymentType = paymentType
        this.last = last
        this.from = from
        this.destinity = destinity
    }
}

const uberUser = new ProfileUser("Guadalupe", "card");
console.log("Ejercicio 3.3: Uber");
console.log(uberUser.getNameAndPayment());