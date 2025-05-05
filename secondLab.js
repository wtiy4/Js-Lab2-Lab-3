let characters = [
    [
        "Luke Skywalker",
        177,
        "male",
        77,
        "brown",
    ],
    [
        "Leia Organa",
        160,
        "female",
        56,
        "blue",
    ],
    [
        "Han Solo",
        180,
        "male",
        80,
        "brown",
    ],
    [
        "Chewie",
        222,
        "male",
        190,
        "black",
    ],
    [
        "kevien",
        106,
        "male",
        32.2,
        "red",
    ],
];



// [ Map ]
// Get array of all names only
const names = characters.map(name => name[0]);
console.log(names);


// Get array of all heights only
const heights = characters.map(height => height[1])
console.log(heights)





// [ Reduce ]
//Get total height of all characters
const totalHeight = characters.reduce((sum, height) => sum + height[1], 0);
console.log(`${totalHeight} الطول الكلي`);







// [ Filter ]
// Get characters with height less than 200
const underTwo = characters.filter(el => el[1] < 200);
console.log(underTwo)



// Get all male characters
const maleChar = characters.filter(el => el[2] == "male")
console.log(maleChar)




// [ Sort ]
// Sort by mass
const byMass = characters.sort((a, b) => a[3] - b[3]);
console.log(byMass);



// Sort by height
const byHeight = characters.sort((a, b) => a[1] - b[1]);
console.log(`${byHeight} بناءاً على الطول`);






// [ Every ]
// Does every character have mass more than 40?
const moreThan = characters.every(character => character[3] > 40);
console.log(moreThan);


// Is every character shorter than 200?
const shorterThan = characters.every(character => character[1] < 200);
console.log(shorterThan);






// [ Some ]
// Is there at least one character with blue eyes ?
const blueEyes = characters.some(character => character[4] === "blue");
console.log(blueEyes);

// Is there at least one character taller than 210 ?
const tallerThan = characters.some(el => el[1] > 210);
console.log(tallerThan)