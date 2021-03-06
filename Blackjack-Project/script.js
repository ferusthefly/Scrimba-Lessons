//
let playerInfo = {
    name: "Kyle",
    chips: 25
}
//My first array! An array is an ordered list of items. Right now it is empty because the game has yet to start. It is here because it is being declared for later 
let cards = []
//declares sum variable and sets it to zero since the game has yet to start.
let sum = 0
//declares that whether or not the user has blackjack. starts as false since game has yet to run.
let hasBlackjack = false
//this lets pc know if player is still in the game. It starts as false because game has yet to start.
let isAlive = false
//Creates a variable to hold the text for the game message
let gameMessage;
//Grabs the message-el html element from the Dom and assigns it to a variable so it can be interacted with in JS
let messageEl = document.getElementById('message-el')
//let sumEl = document.getElementById('sum-el')
//Above is a simpler method of grabbing the sum-el element from the DOM
//Below is a more specific method. Note that one needs to add the type of selector before the element for it to work. since sum-el is an id, the # is the right selector.
let sumEl = document.querySelector("#sum-el")
//Grabs the cards-el html element from the Dom and assigns it to a variable so it can be interacted with in JS
let cardsEl = document.querySelector('#cards-el')
//
let playerEl = document.getElementById('player-el')
//render it with .textContent. call the object with . and structure the output.
playerEl.textContent = playerInfo.name + ": $" + playerInfo.chips

//function to generate a random card
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 + 1)
    if (randomCard > 10) {
        randomCard = 10
    } else if (randomCard === 1) {
        randomCard = 11
    } else {
        return randomCard
    }
    return randomCard
}


function startGame() {
    //assigns the first card a variable and then a number through the getRandomCard() function.
    let firstCard = getRandomCard()
    //assigns the second card a variable and then a number through the getRandomCard() function.
    let secondCard = getRandomCard()
    //Re-assigns the cards array to contain the two random cards
    cards = [firstCard, secondCard]
    //Re-assigns the sum variable and add the two cards
    sum = firstCard + secondCard
    //Re-assigns  whether or not the user has blackjack. starts as false since game has yet to run.
    hasBlackjack = false
    //this re-assigns the isAlive to true. It lets the pc know if player is still in the game. it will default true if under 20 or win and false if over 21 signaling that the game is over
    isAlive = true
    renderGame()
}

function renderGame() { 
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += cards[i] + " "
        console.log(cards[i])
    }
    
    sumEl.textContent = 'Sum: ' + sum
    if (sum <= 20) {
        gameMessage = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        gameMessage = 'Blackjack!'
        hasBlackjack = true
    } else {
        gameMessage = 'You\'re out of the game!'
        let isAlive = false
    }
    console.log(gameMessage)
    //changes the <p> text to gameMessage text. I originally out this inside of each condition but this is a faster way.
    messageEl.textContent = gameMessage
}

function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackjack === false) {
        console.log("Drawing a new card from the deck!")
        let theThirdCard = getRandomCard()
        //or sum += theThirdCard
        sum = sum + theThirdCard
        cards.push(theThirdCard)
        console.log(cards)
        console.log(sum)
        renderGame()  
    } else {
        console.log("Sorry you can't do that.")
    }
}


