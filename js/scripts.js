// UI Logic
let taskList = new TaskList();

function displayUserTaskList(taskListToDisplay) {
  let userTask = $("ul#output");
  let htmlForTaskInfo = "";
  taskListToDisplay.tasks.forEach(function(task) {
    htmlForTaskInfo += "<li id=" + task.id + ">" + task.tasks + "</li>"
  });
  userTask.html(htmlForTaskInfo);
};

function attachTaskListeners(){
  $("ul#output").on("click", "li", function() {
    console.log(this.id);
  });
};

$(document).ready(function() {
  attachTaskListeners();
  $("form#entries").submit(function(event) {
    event.preventDefault();
    const tasks = $("input#tasks").val();
    let newTask = new Blaah(tasks);
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
function Blaah(tasks) {
  this.tasks = tasks;
}