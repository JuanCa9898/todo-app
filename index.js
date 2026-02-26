let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addTask");
let tasklist = document.getElementById("taskList");

let tasks = [];

function renderTasks() {
    tasklist.innerHTML = "";
    tasks.forEach(function(task){
        let li = document.createElement("li");
        li.textContent = task;
        tasklist.appendChild(li);
    });
}

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push(taskText);
        taskInput.value = "";
        renderTasks();
    }
}

addBtn.addEventListener("click", addTask);

console.log(tasks);
