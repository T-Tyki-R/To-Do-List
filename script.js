// Add Task to list

const addTask = () => {
    let input = document.getElementById("taskInput").value;
    if(input === ""){
        alert("Please enter a task!");
        return;
    }
    let li = document.createElement("li");

    // Using tailwaind cdn to add a handwritten quality text to my input
    li.className = "font-['Tangerine'] text-3xl sm:text-5xl text-gray-800 flex items-center justify-between";

    li.innerHTML = input + "<span style='color:red;' onClick='deleteTask(this)'> &times;</span>";
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
    savaData();
}

// Add event listener for enter key

document.getElementById("taskInput").addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        addTask();
    }
})

// Delete a task 

const deleteTask = task => {
    task.parentElement.remove();
    saveData();
}

// Save task to local storage

const saveData = () => {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

// Load values from local storage

const loadData = () => {
    document.getElementById("taskList").innerHTML = localStorage.getItem("task");
}

loadData();