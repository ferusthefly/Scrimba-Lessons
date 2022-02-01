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

