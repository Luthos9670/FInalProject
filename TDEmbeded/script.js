//This is My ToDo list app it takes in user input of tasks that they need to do and then puts them into a list container
/*when the button is clicked it calls the addTask function which takes the input and stores it in list container
the app also allows the user to to check off the task and delete it with 2 seperate bttons
and it uses a "saveData" function so that it keeps the list and all changes to it after the page reloads */


//inputBox is where the user types in each task
//List container is the ul where the tasks will be displayed
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let list = [1, 2, 3, 4];

//I found that i didn't need arrays for my app. the way i did it allowed me to have the data save and flow more nicely with the buttons
//I understand that it was to show our knowlage on it so i added in a vey simple one with a simple for loop
//If i was adding in user input the variable that the user input would be saved to would have been pushed into the created array
for (let i = 0; i < list.length; i++) {
    list[i] *= 2;
}
list.push(5);
console.log(list);

function addTask(){
    if(inputBox.value === ''){
        //This is to make sure that the user doesn't add in a blank task
        alert("You must write something!");
    }
    //If the input is anything else then the following happens
    else{
        //This creates a new list element
        let li = document.createElement("li");
        //This sets the content of the created list element with the input the user typed in
        li.innerHTML = inputBox.value;
        //This adds the new list element to listContainer
        listContainer.appendChild(li);
        //this creates a new span element that will act as a delete button
        let span = document.createElement("span");
        //This sets the content of the span element to the x symbol
        span.innerHTML = "\u00d7";
        //This attaches the newly created x span element to the list element we created
        li.appendChild(span);
    }
    //this is to make it so that the input box (where the user types in the data) is cleared after something is created
    inputBox.value = "";
    //This calls the saveData function which i explain later
    saveData();
}

//This adds a listener to the task list so that when any element in the task list is clicked on this function checks what was clicked
listContainer.addEventListener("click", function(e){
    //If a list item is clicked then it toggles between the two options of the checked class created in the CSS file
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    //if the the the span(x) button was clicked it removes the entire parent element which is the list item we created
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//This functions purpose is to make it so that when the page reloads it doesn't reset what was in the list 
function saveData(){
    //it stores listContainer in the browsers local storage 'data'
    localStorage.setItem("data", listContainer.innerHTML);
}

//this function gets the saved data(list of tasks) from the browsers local storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
//This is just to call the previous function when the page loads
showTask();