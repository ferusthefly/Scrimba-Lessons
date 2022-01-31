let firstName = 'Kyle'
let lastName = 'Schumel'
let fullName = firstName + " " + lastName

console.log(fullName)

let theName = "Linda"
let greeting = "Hi there"

function userGreeting() {
    console.log(greeting + ', ' + theName + '!')
}

userGreeting()

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints += -1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

// Call the functions to that the line below logs out 10
console.log(myPoints)

// Try to predict what each of the lines will log out
console.log("2" + 2) // 
console.log('22')
console.log(11 + 7) //
console.log(18)
console.log(6 + "5") //
console.log('65')
console.log("My points: " + 5 + 9) //
console.log('My points: 59')
console.log(2 + 2) // 
console.log(4)
console.log("11" + "14") //
console.log('1114') 

let num1 = 8
let num2 = 2
console.log(num1)
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
document.getElementById('sum-el').textContent = sumEl

// Create four functions: add(), subtract(), divide(), multiply()
function add() {
    sumEl = num1 + num2
    document.getElementById('sum-el').textContent = 'Sum: ' + sumEl
}

function subtract() {
    sumEl = num1 - num2
    document.getElementById('sum-el').textContent = 'Sum: ' + sumEl
}

function divide() {
    sumEl = num1 / num2
    document.getElementById('sum-el').textContent = 'Sum: ' + sumEl
}

function multiply() {
    sumEl = num1 * num2
    document.getElementById('sum-el').textContent = 'Sum: ' + sumEl
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"



