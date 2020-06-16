
var taskIdCounter = 0;
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function() {
    event.preventDefault();
    // get input from user
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // validate input fields
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    formEl.reset();
    // create object from user input
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    // send it as argument to createTaskEl
    createTaskEl(taskDataObj);
}
// use taskDataObj to create task
var createTaskEl = function (taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // add task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);
    
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    // append task name and type to list item
    listItemEl.appendChild(taskInfoEl);
    // append entire list item to list
    tasksToDoEl.appendChild(listItemEl);
    // increase task counter for next unique id
    taskIdCounter++;
}
formEl.addEventListener("submit", taskFormHandler);