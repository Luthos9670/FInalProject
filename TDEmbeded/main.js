// main.js
import { addTask, showTask, handleListClick } from './script.js';

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Show tasks on page load
showTask(listContainer);

// Add task event when pressing "Enter"
inputBox.addEventListener("keydown", function (e) {
    console.log('Key pressed:', e.key); // Log key pressed
    if (e.key === "Enter") {
        addTask(inputBox, listContainer);
    }
});

// Add task event when clicking the "Add" button
document.querySelector("button").addEventListener("click", function () {
    console.log('Button clicked'); // Log button click
    addTask(inputBox, listContainer);
});

// List click event (for toggling check or deleting task)
listContainer.addEventListener("click", function (e) {
    handleListClick(e, listContainer);
});
