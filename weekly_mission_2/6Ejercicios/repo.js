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

const issue = {
    title: "Diferentes nombres de clases",
    repositoryNameAssosiated: "fashion-brand",
    status: "abierto",
    numberOfComments: 10,
    labels: 2,
    author: "grisGGG",
    dateCteated: "3 January 2022",
    lastUpadated: "2 April 2020",
    getTitleAndAuthor: function(){
        return `The issue with title: ${this.title} from the author: ${this.author}`
    },
    getGeneralInfo: function(){
        return `Author: ${this.author}, created this issue in: ${this.dateCteated}`
    }
}
console.log(issue);
console.log(issue.labels);
console.log(issue.getGeneralInfo());

const pullRequest = {
    title: "1. Inicializando repositorio",
    branchName : "Master",
    dateCreated: "2 april 2022",
    status: "created",
    reposirtoryNameAssociated: "Playbook",
    getStatus: function(){
        return `Status: ${this.status}`
    },
    getTitleAndAuthor: function(){
        return `Titutlo del pullRequest: ${this.title}, Author: ${this.author}`
    }
}

console.log(pullRequest);
console.log(pullRequest.branchName);
console.log(pullRequest.getTitleAndAuthor());