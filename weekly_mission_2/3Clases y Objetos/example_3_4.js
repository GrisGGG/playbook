//Ejemplo 5: Atributos con valores por default

class PullRequest {
    constructor (repo, title, lenes_changed){
        this.repo = repo
        this.title =  title
        this.lines_changed =  this.lines_changed
        this.status = "OPEN"
        this.dateCreated = new Date()// Esto guardara la fecha actual en que se instaancia el objeto
    }

    getInfo(){
        return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
    }
}
console.log("Ejemplo 5: Atributos con valores por default");
const myPR1 = new PullRequest("LaunchX" , "Mi primer PR", 100)
console.log(myPR1.getInfo());
