document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
  });
  
  function loadTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
  
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    tasks.forEach(function (task, index) {
      const li = document.createElement("li");
      li.className = "task";
      li.innerHTML = `
        <span>${task.text}</span>
        <button onclick="deleteTask(${index})">Delete</button>
      `;
      taskList.appendChild(li);
    });
  }
  
  function addTask() {
    const newTaskInput = document.getElementById("new-task");
    const newTaskText = newTaskInput.value.trim();
  
    if (newTaskText !== "") {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push({ text: newTaskText });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      newTaskInput.value = "";
      loadTasks();
    }
  }
  
  function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  }
  