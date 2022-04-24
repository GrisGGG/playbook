const repo = {
    name: "LaunchX",
    author: "grisGGG",
    language: "Javascript",
    numberOfCommits: 50,
    stars: 3,
    forks: 6,
    issues_open: 10,
    issues_close: 8,

    getTotAllIssues: function(){
        return this.issues_open + this.issues_close;
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }

}
console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotAllIssues());
console.log(repo.getGeneralInfo());