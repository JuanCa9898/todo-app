let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addTask");
let tasklist = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    tasklist.innerHTML = "";
    tasks.forEach(function(task, index){
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox"; 
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function(){
            task.completed = checkbox.checked;
            renderTasks(); 
        })

        let li = document.createElement("li");
        let textSpan = document.createElement("span");
        textSpan.textContent = task.text;
        li.appendChild(checkbox);
        li.appendChild(textSpan);
        tasklist.appendChild(li);
  
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function(){
            tasks.splice(index, 1);
            renderTasks();
        })

        let leftSide = document.createElement("div");

        leftSide.appendChild(checkbox);
        leftSide.appendChild(textSpan);
        
        li.appendChild(leftSide);
        li.appendChild(deleteBtn);


        if (task.completed){
            textSpan.classList.add("completed");
        }   else {
            textSpan.style.textDecoration = "none";
        }

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
}

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({text : taskText, 
                    completed : false});
        taskInput.value = "";
        renderTasks();
    } else {
        alert("Please enter a task.");
    }
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
})

renderTasks();
console.log(tasks);
