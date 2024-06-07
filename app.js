console.log("Hello World!\n==========\n");


function printOdds(count) {
    for(let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}

printOdds(100)


// Exercise 1 Section
console.log("EXERCISE 1 ABOVE:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age){
    
    if ( age >= 16) {
       let aboveSixteen = (`Congrats ${name}, you can drive!`)
       console.log(aboveSixteen)
    } else {
        let belowSixteen = (`Sorry ${name}, but you need to wait until you're 16.`)
        console.log(belowSixteen)
    }
}


checkAge("JP", )