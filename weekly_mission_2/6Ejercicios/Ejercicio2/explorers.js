const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
        "js",
        "c#"
    ],
        missions: {
        onboarding: {
            isFinished: true,
            exercisesFinished: true
        },
        frontend: {
            isFinished: true,
            exercisesFinished: true
        }
    }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
        "js"
    ],
        missions: {
        onboarding: {
            isFinished: true,
            exercisesFinished: false
        },
        frontend: {
            isFinished: false,
            exercisesFinished: false
        }
    }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
        "elixir"
    ],
        missions: {
        onboarding: {
            isFinished: true,
            exercisesFinished: true
        },
        frontend: {
            isFinished: false,
            exercisesFinished: false
        }
    }
    }
]
console.log('1. Nombre de los explorer:');
Object.entries(explorers).forEach(([key, value]) => { //key es el indice de casa elemento del objeto
      console.log( value.name);
     // value es toda la información que vienen en los objetos
});

console.log('2. Stack del explorer: ');
Object.entries(explorers).forEach(([key, value]) => {
    console.log( value.stack); 
});


let stackExplorers = Object.entries(explorers).map(function(objeto) {
    return objeto[1].stack
})
console.log('3. Lista de stack: ');
console.log( stackExplorers);

let stackContainsJs = stackExplorers.filter((element) =>{
    return element.includes('js');
})
console.log('4. Stack que contiene js: ');
console.log(stackContainsJs);

let cdmxExplorers = Object.entries(explorers).find((element) =>
    element.city = "CDMX"
)
console.log("5. Explorer de CDMX" );
console.log(cdmxExplorers);

let completedExe = Object.entries(explorers).reduce((acc, element) =>
    acc + element[1].exercises_completed, 0
)
console.log("6. Tareas terminadas" );
console.log(completedExe);

let finishedExe = Object.entries(explorers).some((element) =>
     element[1].missions.onboarding.exercisesFinished === true
)

console.log("7. Tareas terminadas" );
console.log(finishedExe);

let finishOn = Object.entries(explorers).every((element) =>
     element[1].missions.onboarding.isFinished === true
)

console.log("8. Tareas terminadas" );
console.log(finishOn);