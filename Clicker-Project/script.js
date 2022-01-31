//Links an html element and assigns it to a variable for JS to work with
let countEl = document.getElementById("count-el")
//Sets the count var to 0
let count = 0
//Links an html element and assigns it to a variable for JS to work with
let saveEl = document.getElementById('save-el')
//function to add 1 to count
function increment() {
    //takes count and makes it = to count + 1
    count += 1
    //makes the html interact with the count var and display it
    countEl.textContent = count
}
//function to save previous count as well as the new higher count
function save() {
    //makes a string that has the count concated with a dash to seperate 
    let countLog = count + ' - '
    //equal to saveEl.textContent = saveEl.textContent + countLog ---It makes the html for saveEl interact with the var countLog to display what the current is and '-' so when you increment a new count the previous stays and the new count is add along with '-'.
    saveEl.textContent += countLog 
    //displays current count value in console
    console.log(count)
    //Sets count to 0 so user can start a new count of people
    count = 0
    //Makes the html interact with the new value set for count
    countEl.textContent = count
    //displays current count value in console
    console.log(count)
    //Note the tutorial uses 
    // countEl.textContent = 0
    // count = 0
    // as solution
}




// //grabs the html <p>
// let welcomeEl = document.getElementById('welcome-el')

// let userName = 'Kyle'
// let greeting = 'Well howdy '
// welcomeEl.innerText = greeting + userName + "! "
// //now add an emoji
// welcomeEl.innerText = welcomeEl.innerText + ' 👋'
// //or a shorter way
// welcomeEl.innerText += ' 👋👋'
