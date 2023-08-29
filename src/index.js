import "./style.css";
import {
  setDateTimePicker,
  setTaskForms,
  setTextArea,
  setDoneCheckers,
  closeMenusOnOutsideClick,
} from "./helper";
import { isToday } from "date-fns";
import { format } from "date-fns";
// var format = require("date-fns/format");
import { getFormElements, fillTaskData, createNewTaskForm } from "./display";

const tasksContainer = document.getElementById("tasks-container");
const lists = [];

// Create lists button

// Save list to local storage with id reference to the task

//

function loadTasks() {
  let allTasks = [];
  for (let i = 0; i < localStorage.length; i++) {
    let task = JSON.parse(localStorage.getItem(localStorage.key(i)));
    allTasks.push(task);
  }
  allTasks.sort((a, b) => a.date - b.date);
  return allTasks;
}

window.onload = function () {
  setDateTimePicker(document);
  setTextArea(document);
  setTaskForms(document);
  setDoneCheckers(document);
  setFormSubmit(document);
  closeMenusOnOutsideClick();
  setNewTaskButton();
  loadTasks();
  populateTaskPage(allTasks);
  setTabs();
};
const todayTab = document.getElementById("today-tab");
const plannedTab = document.getElementById("planned-tab");
const allTab = document.getElementById("all-tab");
const doneTab = document.getElementById("done-tab");

const allTasks = loadTasks();

function setTabs() {
  todayTab.addEventListener("click", function (event) {
    clearTaskPage();
    populateTaskPage(filterTodayTasks(allTasks));
  });
  plannedTab.addEventListener("click", function (event) {
    clearTaskPage();
    populateTaskPage(filterFutureTasks(allTasks));
  });
  allTab.addEventListener("click", function (event) {
    clearTaskPage();
    populateTaskPage(allTasks);
  });
  doneTab.addEventListener("click", function (event) {
    clearTaskPage();
    populateTaskPage(filterDoneTasks(allTasks));
  });
}
function setTab(tab, taskList) {
  tab.addEventListener("click", function (event) {
    clearTaskPage();
    populateTaskPage(taskList);
  });
}

// add listeners to tabs

// HTML element is created and appended

function addFormToWindow(form) {
  tasksContainer.appendChild(form);
  setListenersForFormElements(form);
}

function setListenersForFormElements(form) {
  setDateTimePicker(form);
  setTextArea(form);
  setTaskForms(form);
  setDoneCheckers(form);
  setFormSubmit(form);
}

function setNewTaskButton() {
  const newTaskButton = document.getElementById("new-task-button");
  newTaskButton.addEventListener("click", function () {
    addFormToWindow(createNewTaskForm());
  });
}

function setFormSubmit(element) {
  const formName = element.getElementsByClassName("new-task-name");
  formName[0].addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
      saveTask(this.parentElement.parentElement.parentElement);
    }
  });
}

function saveTask(taskForm) {
  let data = getFormElements(taskForm);
  let name = data.nameInput.value;
  let note = data.noteInput.value;
  console.log(data.deadlineInput.value);
  let deadline = format(
    new Date(data.deadlineInput.value),
    "dd.MM.yyyy',' HH:mm"
  );

  let done = data.doneInput.checked;
  let date = Date.now();
  const task = createTask(taskForm.id, name, note, deadline, done, date);
  if (taskForm.id in localStorage) {
    changeTask(taskForm.id, name, note, deadline, done);
  } else {
    allTasks.push(task);
    localStorage.setItem(taskForm.id, JSON.stringify(task));
  }
}

function createTask(id, name, note, deadline, done, date) {
  return {
    id: id,
    name: name,
    note: note,
    deadline: deadline,
    done: done,
    date: date,
  };
}

function changeTask(id, name, note, deadline, done) {
  const task = JSON.parse(localStorage.getItem(id));
  task.name = name;
  task.note = note;

  task.deadline = deadline;
  task.done = done;
  localStorage.setItem(id, JSON.stringify(task));
  let replaceTask = allTasks.find((x) => x.id === task.id);
  Object.assign(replaceTask, task);
}
function clearTaskPage() {
  tasksContainer.innerHTML = "";
}

function populateTaskPage(taskArray) {
  for (let i = 0; i < taskArray.length; i++) {
    let task = taskArray[i];
    let form = createNewTaskForm();
    addFormToWindow(fillTaskData(form, task));
  }
}

function filterTodayTasks(array) {
  let todayTasks = [];
  for (let i = 0; i < array.length; i++) {
    let taskDate = array[i].deadline;
    if (sameDay(taskDate, Date.now())) {
      todayTasks.push(array[i]);
    }
  }
  return todayTasks;
}

function filterLateTasks(array) {
  let lateTasks = [];
  for (let i = 0; i < array.length; i++) {
    let taskDate = array[i].deadline;
    if (new Date(taskDate) < Date.now()) lateTasks.push(array[i]);
  }
  return lateTasks;
}

function filterFutureTasks(array) {
  let futureTasks = [];
  for (let i = 0; i < array.length; i++) {
    let taskDate = array[i].deadline;
    if (new Date(taskDate) > Date.now()) futureTasks.push(array[i]);
  }
  return futureTasks;
}

function filterDoneTasks(array) {
  let doneTasks = [];

  for (let i = 0; i < array.length; i++) {
    let taskDone = array[i].done;
    if (taskDone) doneTasks.push(array[i]);
  }
  return doneTasks;
}

function sameDay(date1, date2) {
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  return (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  );
}
