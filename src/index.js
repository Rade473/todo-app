import "./style.css";
import {
  setDateTimePicker,
  setTaskForms,
  setTextArea,
  setDoneCheckers,
  closeMenusOnOutsideClick,
  newListForm,
  setLocalStorageButton,
  addOptionToTheListSelect,
} from "./helper";
import { isToday } from "date-fns";
import { format } from "date-fns";
import { parse } from "date-fns";
import { isAfter } from "date-fns";
import { isBefore } from "date-fns";

import {
  getFormElements,
  fillTaskData,
  createNewTaskForm,
  createNewListForm,
  changePageTitle,
  changeTitleColor,
} from "./display";

const tasksContainer = document.getElementById("tasks-container");
const lists = loadLists();
console.log(lists);

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
  let emptyarray = [];
  if (localStorage.getItem("lists") !== null) {
    let lists = JSON.parse(localStorage.getItem("lists"));

    for (let i = 0; i < lists.length; i++) {
      createNewListForm(lists[i].name, lists[i].color, lists[i].id);
    }
    return lists;
  } else return emptyarray;
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
  setLocalStorageButton();
  setSelectLists(document, lists);
  setListListeners(document);
};

const todayTab = document.getElementById("today-tab");
const plannedTab = document.getElementById("planned-tab");
const allTab = document.getElementById("all-tab");
const doneTab = document.getElementById("done-tab");
const allTasks = loadTasks();
console.log(allTasks);

function setTabs() {
  todayTab.addEventListener("click", function () {
    clearTaskPage();
    populateTaskPage(filterTodayTasks(allTasks));
    changePageTitle("Today");
    changeTitleColor("blue");
  });
  plannedTab.addEventListener("click", function () {
    clearTaskPage();
    populateTaskPage(filterFutureTasks(allTasks));
    changePageTitle("Planned");
    changeTitleColor("red");
  });
  allTab.addEventListener("click", function () {
    clearTaskPage();
    populateTaskPage(allTasks);
    changePageTitle("All tasks");
    changeTitleColor("black");
  });
  doneTab.addEventListener("click", function () {
    clearTaskPage();
    populateTaskPage(filterDoneTasks(allTasks));
    changePageTitle("Done");
    changeTitleColor("gray");
  });
}

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
  setSelectElement(form);
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

function setSelectElement(element) {
  const selectElements = element.getElementsByClassName("select-list");
  for (let i = 0; i < selectElements.length; i++) {
    selectElements[i].addEventListener("change", function () {
      listOptionsController(this);
    });
  }
}

function setSelectLists(element, lists) {
  const select = element.getElementsByClassName("select-list");
  for (let i = 0; i < select.length; i++) {
    addOptionToTheListSelect(select[i], lists);
  }
}

function setSaveListButton() {
  const saveListButton = document.getElementById("save-list");
  saveListButton.addEventListener("click", function () {
    saveNewList();
  });
}

function listOptionsController(choice_element) {
  let task_id =
    choice_element.parentElement.parentElement.parentElement.parentElement.id;
  if (choice_element.value === "1") {
    deleteTaskFromLists(task_id);
  } else {
    deleteTaskFromLists(task_id);
    addTaskToList(choice_element.value, task_id);
  }
}

function addTaskToList(list_id, task_id) {
  let list = findList(list_id);
  saveList(list, task_id);
  console.log(lists);
}

function deleteTaskFromLists(task_id) {
  for (let i = 0; i < lists.length; i++) {
    var tasksinlists = lists[i].tasks;
    let index = tasksinlists.indexOf(task_id);
    if (index > -1) {
      tasksinlists.splice(index, 1);
    }
  }
  localStorage.setItem("lists", JSON.stringify(lists));
}

function findList(list_id) {
  let list = lists.find((obj) => {
    return obj.id === Number(list_id);
  });
  return list;
}

function saveNewList() {
  var list = getListInfo();
  saveList(list);
  createNewListForm(list.name, list.color, list.id);
  var newlist = [list];
  setSelectLists(document, newlist);
}

function saveList(new_list, task_id) {
  let finding = findList(new_list.id);
  if (finding === undefined) {
    lists.push(new_list);
  } else {
    finding.tasks.push(task_id);
    let replaceList = lists.find((x) => x.id === new_list.id);
    Object.assign(replaceList, finding);
  }
  localStorage.setItem("lists", JSON.stringify(lists));
}

function getListInfo() {
  var name = document.getElementById("new-list-name").value;
  var color = document.getElementById("color").value;
  return {
    name: name,
    color: color,
    tasks: [],
    id: Date.now(),
  };
}

function setListListeners(element) {
  let listsElements = element.getElementsByClassName("list");
  for (let i = 0; i < listsElements.length; i++) {
    listsElements[i].addEventListener("click", function () {
      filterTasksByList(this.id);
      console.log(this.id);
    });
  }
}

//

function filterTasksByList(list_id) {
  let list = findList(list_id);
  console.log(findList(list_id));
  let tasks = [];
  for (let i = 0; i < list.tasks.length; i++) {
    let task = allTasks.filter((obj) => {
      return obj.id === allTasks.id;
    });
    tasks.push(task);
  }
  // console.log(tasks);
}

export function saveTask(taskForm) {
  let data = getFormElements(taskForm);
  let name = data.nameInput.value;
  let note = data.noteInput.value;

  function checkifDateEntered() {
    if (data.deadlineInput.value.length > 0) {
      return format(new Date(data.deadlineInput.value), "dd.MM.yyyy, HH:mm");
    } else {
      return null;
    }
  }
  let deadline = checkifDateEntered();
  let done = data.doneInput.checked;
  let date = Date.now();
  let list = data.listInput.value;
  const task = createTask(taskForm.id, name, note, deadline, done, list, date);
  if (taskForm.id in localStorage) {
    changeTask(taskForm.id, name, note, deadline, done, list);
  } else {
    allTasks.push(task);
    localStorage.setItem(taskForm.id, JSON.stringify(task));
  }
}

function createTask(id, name, note, deadline, done, list, date) {
  return {
    id: id,
    name: name,
    note: note,
    deadline: deadline,
    done: done,
    list: list,
    date: date,
  };
}

function changeTask(id, name, note, deadline, done, list) {
  const task = JSON.parse(localStorage.getItem(id));
  task.name = name;
  task.note = note;
  task.deadline = deadline;
  task.done = done;
  task.list = list;
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
