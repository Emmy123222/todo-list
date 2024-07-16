const taskInput = document.getElementById("taskInput")
const listContainer = document.getElementById("list-container")

function addTask() {
    if(taskInput.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = taskInput.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value = "";
    saveDate();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveDate();
    }
}, false);

function saveDate() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();