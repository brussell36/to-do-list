// UI Logic
let taskList = new TaskList();

$(document).ready(function() {
  $("#tasks").submit(function(event) {
    event.preventDefault();
    const tasks = $("input#tasks").val();
    let newTask = new Tasks(tasks);
    taskList.addTask(newTask);
    console.log(tasklist.tasks);
  });
});

// Business Logic
function TaskList() {
  this.tasks = [];
  this.currentId = 0;
}

TaskList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

TaskList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Tasks(tasks) {
  this.tasks = tasks
}