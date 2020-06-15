// UI Logic
let taskList = new TaskList();

function displayUserTaskList(taskListToDisplay) {
  let userTask = $("ul#output");
  let htmlForTaskInfo = "";
  taskListToDisplay.tasks.forEach(function(task) {
    htmlForTaskInfo += "<li id=" + task.id + ">" + task + "</li>"
  });
  userTask.html(htmlForTaskInfo);
};

$(document).ready(function() {
  $("form#entries").submit(function(event) {
    event.preventDefault();
    const tasks = $("input#tasks").val();
    let newTask = new Tasks(tasks);
    taskList.addTask(newTask);
    console.log(taskList);
    displayUserTaskList(taskList);
  });
});

// TaskList Business Logic
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

// Tasks Business Logic
function Tasks(tasks) {
  this.tasks = tasks;
}