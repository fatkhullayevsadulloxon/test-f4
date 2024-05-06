// console.log("Og'irlikni ko'tarish 1");
// console.log("Og'irlikni ko'tarish 2");
// console.log("Og'irlikni ko'tarish 3");
// console.log("Og'irlikni ko'tarish 4");
// console.log("Og'irlikni ko'tarish 5");


// FOR LOOP
// for(let rep = 1; rep <= 5; rep++){
//     console.log(`Og'irlikni ko'tarish ${rep}`);
// }

// const person = ["Muhammadziyo", "Nabijonov", 2009, "reels"]

// const typeOfPerson = []

// for(let i = 0; i <= person.length - 1; i++){
//    typeOfPerson.push(typeof person[i])
// }
// console.log(typeOfPerson);

// const person = ["Muhammadziyo", "Nabijonov", 2009, "reels"]

// for(let i = person.length - 1; i >= 0; i--){
//     console.log(person[i]);
// }

// for(let i = 1; i <= 3; i++){
//     console.log(`Mashq ${i}`);

//     for(let u = 1; u <= 5; u++){
//         console.log(`Urinish ${u}`);
//     }
// }


const elInput = document.querySelector('.input')

elInput.addEventListener('input', () => {
    console.log(elInput.value);
})
