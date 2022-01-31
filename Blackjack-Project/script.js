//declares the first card's number
let firstCard = 10
//declares the second card's number
let secondCard = 7
//My first array! An array is an ordered list of items
let cards = [firstCard, secondCard]
//declares a sum variable and add the two cards
let sum = firstCard + secondCard
//declares that whether or not the user has blackjack. starts as false since game has yet to run.
let hasBlackjack = false
//this lets pc know if player is still in the game. it will be default if under 20 or win and false if over 21 signaling that the game is over
let isAlive = true
let gameMessage;
let messageEl = document.getElementById('message-el')
//let sumEl = document.getElementById('sum-el')
//Above is a simpler method of grabbing the sum-el element from the DOM
//Below is a more specific method. Note that one needs to add the type of selector before the element for it to work. since sum-el is an id, the # is the right selector.
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector('#cards-el')

function startGame() {
    renderGame()
}

function renderGame() { 
    cardsEl.textContent = 'Cards: ' + cards[0] + ' and ' + cards[1]
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
    console.log("Drawing a new card from the deck!")
    let theThirdCard = 4
    //or sum += theThirdCard
    sum = sum + theThirdCard
    cards.push(theThirdCard)
    console.log(cards)
    console.log(sum)
    renderGame()
}


