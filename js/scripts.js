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
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + tasks.id + ">Delete</button>");
  $("#buttons").on("click", ".deleteButton", function() {
    taskList.deleteTask(this.id);
    $("#show-task").hide();
    displayUserTaskList(taskList);
  });
};

$(document).ready(function() {
  attachTaskListeners();
  $("form#entries").submit(function(event) {
    event.preventDefault();
    const tasks = $("input#tasks").val();
    $("input#tasks").val("");
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

TaskList.prototype.deleteTask = function(id) {
  for (let i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        delete this.tasks[i];
        return true;
      }
    }
  };
  return false;
}

// Tasks Business Logic
function Blaah(tasks) {
  this.tasks = tasks;
}