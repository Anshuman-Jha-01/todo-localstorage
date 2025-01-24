// Select necessary DOM elements
let inp = document.querySelector("input");
let add = document.querySelector(".add");
let ols = document.querySelectorAll("ol");
let listArray = Array.from(ols); //Convert the list into array
let Select = document.querySelector("select");

// Define category objects for localStorage and HTML display
let categories = [
    { name: "Personal", value: JSON.parse(localStorage.getItem("Personal")) || [] },
    { name: "Work", value: JSON.parse(localStorage.getItem("Work")) || [] },
    { name: "Shopping", value: JSON.parse(localStorage.getItem("Shopping")) || [] },
    { name: "Coding", value: JSON.parse(localStorage.getItem("Coding")) || [] },
    { name: "Health", value: JSON.parse(localStorage.getItem("Health")) || [] },
];

// Function to initialize and display tasks from local storage
function initializeTasks() {
    categories.forEach(category => {
        let ol = listArray.find(item => item.classList.contains(category.name));
        category.value.forEach(task => {
            let li = document.createElement("li");
            li.innerText = task;
            ol.appendChild(li);
        });
    });
}

// Add new task to selected category and save to localStorage
add.addEventListener("click", () => {
    let task = inp.value.trim();
    let category = Select.value;

    if (task!='' && category !== "Category") {
        let selectedCategory = categories.find(obj => obj.name === category);

        if (selectedCategory && !selectedCategory.value.includes(task)) {
            // Add task to category list and display in the UI
            selectedCategory.value.push(task);
            let ol = listArray.find(item => item.classList.contains(category));
            let li = document.createElement("li");
            li.innerText = task;
            ol.appendChild(li);

            // Update local storage
            localStorage.setItem(category, JSON.stringify(selectedCategory.value));
        }
    }
    inp.value = ""; // Reset input field
});

// Remove task from both UI and local storage on click
categories.forEach(category => {
    let ol = listArray.find(item => item.classList.contains(category.name));
    ol.addEventListener("click", event => {
        if (event.target.nodeName === "LI") {
            let task = event.target.innerText;
            let index = category.value.indexOf(task);
            if (index > -1) {
                // Remove task from array and local storage
                category.value.splice(index, 1);
                ol.removeChild(event.target);
                localStorage.setItem(category.name, JSON.stringify(category.value));
            }
        }
    });
});

// Initialize tasks on page load
initializeTasks();
