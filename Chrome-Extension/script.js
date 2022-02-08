let myLeads = []
//cannot be reassigned. done because it gives a way to quickly signal what to do with variables 
const inputEl = document.getElementById("input-el")
//cannot be reassigned 
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
//I know this is alot to take in but let's take it one piece at a time here is the psudocode --- Get the leads from the localStorage, Store it in a variable - leadsFromLocalStorage
//Let's work backwards...we want the leads which is "myLeads" (it's a string since it is stored in local), so first we get them with getItem, then we need to turn it into an array so we use JSON.parse, finally we take the newly converted array and store it in the leadsFromLocalStorage var
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

//Push the value of inputBtn to myLeads when the input button is clicked
inputBtn.addEventListener("click", function(){
    //I don't need document.getElementById("input-el").value becaue that is already grabbed on line 3. You just need the variable name.value  
    myLeads.push(inputEl.value)
    //This clears out the input value once it is rendered
    inputEl.value = ""
    //turn the myLeads array into a string
    //saves the myLeads string to localStorage
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads();
    console.log(localStorage.getItem("myLeads"))
})

function renderLeads() {
    //Create a variable, listItems, to hold all the HTML for the list items
    let listItems = ""
    // Log out the items in the myLeads array using a for loop 
    for (let i = 0; i < myLeads.length; i++) {
    //the += takes the previous value and concateates it with the next value
    //the innerHTML converts the inside to <li>
    //remember to put the html stuff in ""
    //psudo-code // create element // set text content // append to ul
    //Another way to do this is shown on line 45 of side-code
    //in the href the wierd qoutes are there because you are closing off the html string with "" to add a JS variable. The first plus adds the var and the second plus starts the next string.
    //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    
    //An example of doing line 28 with a template string aka template literal
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    
    //console.log(listItems)
    
}
    ulEl.innerHTML = listItems

//.innerHTML inside or outside the loop? DOM manipulation comes with a cost. Is it better to change 3 time while in loop or once while outside? Think - is it easier to move 1 time or 3?
}

//on 24 template strings