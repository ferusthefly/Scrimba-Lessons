// 1. Create two variables, firstCard and secondCard. 
let firstCard;
let secondCard; 

// Set their values to a random number between 2-11
firstCard = 10
secondCard = 1
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard

if (sum < 21) {
    console.log('Would you like to draw another card?')
} else if (sum === 21) {
    console.log('You win!')
} else {
    console.log('Aw man. That\'s a bust...')
}

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let userAge = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (userAge < 21) {
    console.log('You can not enter the club!')
} else {
    console.log('Welcome!')
}

// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
    console.log('Not elegible')
} else if (age === 100) {
    console.log('Here is your birthday card from the King!')
} else {
    console.log('Not elegible, you have already gotten one')
}

let myFeature = ['GED', 'basic emt experience', 'sales', 'customer service', 'HTML', 'CSS']

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba

console.log(experience[1])
console.log(experience[2])
console.log(experience[0])

let mySelf = ['Kyle Schumel', 29, true]

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)

console.log(messages)

messages.pop()

console.log(messages)

//this is a method. think of it as using a function on an object. this adds 6 to our cards array.
cards.push(6)
//This is a method to remove the last input.
cards.pop()

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {
    
    console.log(count)
}

for (let count = 10; count < 101; count += 10) {
    console.log(count)
}

//Same as -------
//   START       FINISH   STEP SIZE
for (let i = 10; i < 101; i += 10) {
    console.log(count)
}

let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

//for step size you can use i++ instead of i += 1
for (let i = 0; i < cards.length; i += 1) {
    console.log(cards[i])
}

let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
    //the += will render out the whole string. if you just did = it would only display the one
    greetingEl.textContent += sentence[i]
}

let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else return player2Time
}

getFastestRaceTime()

//double click then cntrl + d will allow you to select and edit multiple lines matching the double clicked word.


// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

// function returnTotalRaceTime() {
//     let totalRaceTime = player1Time + player2Time
//     console.log(totalRaceTime)
// } ------This is wrong because it will only work inside the function 

//This is the right way to do it 

//first create the function 
function getTotalRaceTime() {
    //use return to end the function  with the value of player1Time + player2Time
    return player1Time + player2Time
}

//Now create a variable to hold the returned value of getTotalRaceTime()
let totalTime = getTotalRaceTime()

console.log(totalTime)


//Math.random() generates a number between 0 and 1
//Math.floor() removes the decimals of a number --- Math.floor(12.9) will return 12

let randomNumber = Math.floor( Math.random() * 6 ) + 1

console.log(randomNumber)

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    return Math.floor( Math.random() * 6 ) + 1
}

let diceRoll = rollDice()

rollDice()
rollDice()
rollDice()

let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
//the && means both statements must be true --- this AND that
if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}

// Create two boolean variables, likesDocumentaries and likesStartups
let likesDocumentaries = true
let likesStartups = false
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
//the || means if either statement is true, run recommendMovie() --- If this OR that 
if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}
function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

//real world example of an object
let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}
// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation
let castle = {
    title: "San Guisto Abby",
    isCastle: true,
    guests: 4,
    bedrooms: 2,
    baths: 2,
    beds: 2,
    //common arrays are description bullet points, images in a slideshow, or reviews
    tags: ["castle", "5 stars", "superhost"]

}

console.log(castle.title)
console.log(castle.isCastle)

//methods --- functions that are attached to objects

// Create a person object that contains three keys: name, age, and county.
let person = {
    name: "Kyle",
    age: 29,
    country: "United States"
}
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
function logData() {
    return person.name + " is " + person.age + " years old and lives in " + person.country
}

// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
//I tried doing stuff like if (age >= 6 || <= 17) but ran into problems. the tutorials way is simplier which I think is the way to go.
function checkAge() {
    if (age < 6) {
        return "Free"
    } else if (age < 18) {
        return "Child Discount"
    } else if (age < 27) {
        return "Student Discount"
    } else if (age < 67) {
        return "Full Price"
    } else {
        return "senior citizen discount"
    }
}

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
for (let i = 0; i < largeCountries.length; i ++) {
    console.log(largeCountries[i])
}

// I made it do   the country names but not the - before each name and the title on top.

//Bellow is the correct way
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
console.log("The 5 largest countries in the world:")

for (let i = 0; i < largeCountries.length; i ++) {
    console.log("- ", largeCountries[i])
}

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

function fixString() {
    //pop removes the last array
    largeCountries.pop();
    //push inserts "Pakistan" into the end of the array
    largeCountries.push("Pakistan");
    //shift removes the first array
    largeCountries.shift();
    //unshift inserts "China" into the first place of the array
    largeCountries.unshift("China");
    //prints largeCountries into the console
    console.log(largeCountries);
}

let dayOfMonth = 31
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: ????
// Use the logical "AND operator" -> &&

function checkForSpooky() {
    if (dayOfMonth === 31 && weekday === "Friday") {
        return "????????????????????"
    } else {
        return "Pfew, you're safe"
    }
}


let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomHand() {
    let hand = Math.floor(Math.random(hands) * 4);
    console.log(hand)
}


let hands = ["rock", "paper", "scissor"]

function randomHand() {
    return hands[Math.floor(Math.random()*hands.length)];
}

//Tutorial uses this solution --->
function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}



let fruit = ["????", "????", "????", "????", "????"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruits() {
    //the for loop goes through each array item
    for (let i = 0; i < fruit.length; i++){
         //the conditional sorts it
         if (fruit === "????") {        
    //the textContent puts it on the shelf
             return appleShelf.textContent += fruit[i];
         } else {
             return orangeShelf.textContent += fruit[i];
         }
        
    }