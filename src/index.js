import "./style.css";
import {
  setDateTimePicker,
  setTaskForms,
  setTextArea,
  setDoneCheckers,
  closeMenusOnOutsideClick,
  newListForm,
} from "./helper";
import { isToday } from "date-fns";
import { format } from "date-fns";
import { parse } from "date-fns";
import { isAfter } from "date-fns";
import { isBefore } from "date-fns";
// var format = require("date-fns/format");
import {
  getFormElements,
  fillTaskData,
  createNewTaskForm,
  createNewListForm,
} from "./display";

const tasksContainer = document.getElementById("tasks-container");
const lists = loadLists();

// Save list to local storage with id reference to the task

// Create lists button

//

function loadTasks() {
  let allTasks = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) !== "lists") {
      let task = JSON.parse(localStorage.getItem(localStorage.key(i)));
      allTasks.push(task);
    }
  }
  allTasks.sort((a, b) => a.date - b.date);
  return allTasks;
}

function loadLists() {
  if (localStorage.getItem("lists") !== null) {
    let lists = JSON.parse(localStorage.getItem("lists"));

    for (let i = 0; i < lists.length; i++) {
      createNewListForm(lists[i].name, lists[i].color);
    }
    return lists;
  }
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
  newListForm();
  setSaveListButton();
};

const todayTab = document.getElementById("today-tab");
const plannedTab = document.getElementById("planned-tab");
const allTab = document.getElementById("all-tab");
const doneTab = document.getElementById("done-tab");
const allTasks = loadTasks();

function setTabs() {
  todayTab.addEventListener("click", function () {
    clearTaskPage();
    populateTaskPage(filterTodayTasks(allTasks));
  });
  plannedTab.addEventListener("click", function () {
    clearTaskPage();
    populateTaskPage(filterFutureTasks(allTasks));
  });
  allTab.addEventListener("click", function () {
    clearTaskPage();
    populateTaskPage(allTasks);
  });
  doneTab.addEventListener("click", function () {
    clearTaskPage();
    populateTaskPage(filterDoneTasks(allTasks));
  });
}

// add listeners to tabs

function setTab(tab, taskList) {
  tab.addEventListener("click", function (event) {
    clearTaskPage();
    populateTaskPage(taskList);
  });
}

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

//  form submittion listener on name of the task(enter key press)
function setFormSubmit(element) {
  const formName = element.getElementsByClassName("new-task-name");
  formName[0].addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
      saveTask(this.parentElement.parentElement.parentElement);
    }
  });
}

function setSaveListButton() {
  const saveListButton = document.getElementById("save-list");
  saveListButton.addEventListener("click", function () {
    saveList();
  });
}

function addTaskToList(list, task_id) {
  list.tasks.push(task_id);
}

function saveList() {
  var list = getListInfo();
  lists.push(list);
  localStorage.setItem("lists", JSON.stringify(lists));
  createNewListForm(list.name, list.color);
}

function getListInfo() {
  var name = document.getElementById("new-list-name").value;
  var color = document.getElementById("color").value;
  return {
    name: name,
    color: color,
    tasks: [],
  };
}

function saveTask(taskForm) {
  let data = getFormElements(taskForm);
  let name = data.nameInput.value;
  let note = data.noteInput.value;

  let deadline = format(
    new Date(data.deadlineInput.value),
    "dd.MM.yyyy, HH:mm"
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
    if (isToday(getADate(taskDate))) {
      todayTasks.push(array[i]);
    }
  }
  return todayTasks;
}

function getADate(string) {
  return parse(string, "dd.MM.yyyy, HH:mm", new Date());
}

function filterLateTasks(array) {
  let lateTasks = [];
  for (let i = 0; i < array.length; i++) {
    let taskDate = array[i].deadline;
    if (isBefore(getADate(taskDate), new Date(Date.now())))
      lateTasks.push(array[i]);
  }
  return lateTasks;
}

function filterFutureTasks(array) {
  let futureTasks = [];
  for (let i = 0; i < array.length; i++) {
    let taskDate = array[i].deadline;

    if (isBefore(new Date(Date.now()), getADate(taskDate)))
      futureTasks.push(array[i]);
  }
  console.log(futureTasks);
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
