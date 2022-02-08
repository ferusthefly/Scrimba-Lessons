let box = document.getElementById("box")

box.addEventListener("click", function(){
    console.log("I want to open the box!")
})
//gives a way to quickly signal what to do with variables 
const playerName = "Per"
let credits = 45

credits = credits - 10

// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
//since it's stated once it should also be const
const fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// Use .innerHTML to render a Buy! button inside the div container

const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy() {
    //forgot to add <p> element
    container.innerHTML += "<p>Thank you for buying!</p>"
}

//the += takes the previous value and concateates it with the next value
    //the innerHTML converts the inside to <li>
    //remember to put the html stuff in ""
    //psudo-code // create element // set text content // append to ul
    //Another way to do this is shown on line 45 of side-code
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

const li = document.createElement("li")
li.textContent = myLeads[i]
ulEl.append(li)

//declares and creates the list item
const li = document.createElement("li")
//sets the list item to the array for loop
li.textContent = myLeads[i]
//adds this new html element to the unordered list element
ulEl.append(li)

// template strings/literals

const recipient = "James"

// Refactor the email string to use template strings
const email = "Hey " + recipient + "! How is it going? Cheers Per"

const email = `
    'Hey ${recipient}! How is it going? Cheers Per'
`
console.log(email)

// template strings/literals

const recipient = "James"
// Create a new variable, sender, and set its value to your name
const sender = "Kyle"
// Use your sender variable instead of "Per"
const email = `
    Hey ${recipient}! 
    How is it going? 
    Cheers ${sender}`


console.log(email)

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

//The key is like a variable. it is a string that you want to link the value to
//                     key               value
localStorage.setItem("myLeads", "www.examplelead.com")
localStorage.setItem("myName", "Kyle")
//window.location.reload();
console.log(localStorage.getItem("myName"))
localStorage.clear()

//how to turn a string into an array and then back to a string

let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
//You need to change it to an array so think of how one changes something, you declare it.
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
//now that it is an array you can just use the push method
myLeads.push("www.newarray.com")
// 3. Turn the array into a string again
//once again you need to change it to a string so think of how one changes something, you declare it.
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)

// falsy values

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

//use Boolean() to test it truthy or falsy

