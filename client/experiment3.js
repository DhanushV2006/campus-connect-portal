const input = document.getElementById("userInput");
const addButton = document.getElementById("addBtn");
const themeButton = document.getElementById("toggleBtn");
const preview = document.getElementById("liveOutput");
const activityList = document.getElementById("dynamicList");
const counter = document.getElementById("itemCount");
const container = document.getElementById("mainContainer");

function updateCounter() {
    const total = activityList.children.length;
    counter.textContent = `Total: ${total}`;
}

function addActivityToList(activityText) {
    const listItem = document.createElement("li");
    listItem.className = "exp3-item";

    const activityTextElement = document.createElement("span");
    activityTextElement.className = "exp3-item-text";
    activityTextElement.textContent = activityText;

    const removeButton = document.createElement("button");
    removeButton.className = "exp3-remove";
    removeButton.textContent = "Remove";
    removeButton.type = "button";

    activityTextElement.addEventListener("click", function () {
        activityTextElement.classList.toggle("completed");
    });

    removeButton.addEventListener("click", function () {
        listItem.remove();
        updateCounter();
    });

    listItem.appendChild(activityTextElement);
    listItem.appendChild(removeButton);

    activityList.appendChild(listItem);
}

function addNewActivity() {
    const activity = input.value.trim();

    if (activity === "") {
        alert("Please enter a notice or task.");
        return;
    }

    addActivityToList(activity);
    updateCounter();

    input.value = "";
    preview.textContent = "Start typing above to preview activity...";
}

input.addEventListener("input", function () {
    const text = input.value.trim();

    if (text === "") {
        preview.textContent = "Start typing above to preview activity...";
    } else {
        preview.textContent = text;
    }
});

addButton.addEventListener("click", function () {
    addNewActivity();
});

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addNewActivity();
    }
});

themeButton.addEventListener("click", function () {
    container.classList.toggle("dark-theme");
});