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
