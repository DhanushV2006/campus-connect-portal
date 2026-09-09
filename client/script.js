let changeBtn = document.getElementById("changeBtn");
let message = document.getElementById("message");
let taskInput = document.getElementById("taskInput");
let liveText = document.getElementById("liveText");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

changeBtn.addEventListener("click", function() {
    message.innerText = "The message has been changed using JavaScript!";
});

taskInput.addEventListener("input", function() {
    liveText.innerText = "You entered: " + taskInput.value;
});

addBtn.addEventListener("click", function() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let newTask = document.createElement("li");

    newTask.innerText = taskText;

    taskList.appendChild(newTask);

    taskInput.value = "";
    liveText.innerText = "Your text will appear here...";
});

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});