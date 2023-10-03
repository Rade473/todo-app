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

import { isBefore } from "date-fns";

import {
  getFormElements,
  fillTaskData,
  createNewTaskForm,
  createNewListForm,
  changePageTitle,
  changeTitleColor,
} from "./display";

import * as JsSearch from "js-search";

const searchbar = document.getElementById("search-bar");
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
  populateTaskPage(allTasks, lists);
  setTabs();
  newListForm();
  setSaveListButton();
  setLocalStorageButton();
  setListListeners(document);
  addDeleteButtonListenersToTasks(document);
  adddDeleteButtonListenersToLists(document);
  addSearchEventListener(searchbar);
  testEventListener();
};

const todayTab = document.getElementById("today-tab");
const plannedTab = document.getElementById("planned-tab");
const allTab = document.getElementById("all-tab");
const doneTab = document.getElementById("done-tab");
const tabs = document.getElementsByClassName("tab");
const allTasks = loadTasks();

function setTabs() {
  todayTab.addEventListener("click", function () {
    clearTaskPage();
    populateTaskPage(filterTodayTasks(allTasks), lists);
    changePageTitle("Today");
    changeTitleColor("blue");
    removeChosenClassFromTabs();
    changeTabColor(todayTab);
  });
  plannedTab.addEventListener("click", function () {
    clearTaskPage();
    populateTaskPage(filterFutureTasks(allTasks), lists);
    changePageTitle("Planned");
    changeTitleColor("red");
    removeChosenClassFromTabs();
    changeTabColor(plannedTab);
  });
  allTab.addEventListener("click", function () {
    clearTaskPage();
    populateTaskPage(allTasks, lists);
    changePageTitle("All tasks");
    changeTitleColor("black");
    removeChosenClassFromTabs();
    changeTabColor(allTab);
  });
  doneTab.addEventListener("click", function () {
    clearTaskPage();
    populateTaskPage(filterDoneTasks(allTasks), lists);
    changePageTitle("Done");
    changeTitleColor("gray");
    removeChosenClassFromTabs();
    changeTabColor(doneTab);
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
  addDeleteButtonListenersToTasks(form);
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
  if (lists == undefined) {
    return;
  } else {
    for (let i = 0; i < select.length; i++) {
      addOptionToTheListSelect(select[i], lists);
    }
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
    choice_element.parentElement.parentElement.parentElement.parentElement
      .parentElement.parentElement.id;
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
  let list = getListInfo();
  saveList(list);
  createNewListForm(list.name, list.color, list.id);
  var newlist = [list];
  setSelectLists(document, newlist);
  setListListeners(document);
  adddDeleteButtonListenersToLists(document);
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
  let listsElements = element.getElementsByClassName("list clickable");
  for (let i = 0; i < listsElements.length; i++) {
    listsElements[i].addEventListener("click", function () {
      clearTaskPage();
      populateTaskPage(filterTasksByList(this.parentElement.id), lists);
      let list = findList(this.parentElement.id);
      changePageTitle(list.name);
      changeTitleColor(list.color);
    });
  }
}

//

function filterTasksByList(list_id) {
  let listTasks = [];
  for (let i = 0; i < allTasks.length; i++) {
    if (allTasks[i].list === list_id) {
      listTasks.push(allTasks[i]);
    }
  }
  return listTasks;
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

function populateTaskPage(taskArray, lists) {
  for (let i = 0; i < taskArray.length; i++) {
    let task = taskArray[i];
    let form = createNewTaskForm();
    setSelectLists(form, lists);
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
// Delete tasks
function deleteTask(form, task_id) {
  form.remove();
  let index = allTasks
    .map((x) => {
      return x.id;
    })
    .indexOf(task_id);
  allTasks.splice(index, 1);
  localStorage.removeItem(task_id);
  deleteTaskFromLists(task_id);
}

function addDeleteButtonListenersToTasks(element) {
  let buttons = element.getElementsByClassName("task-delete-button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", deleteTaskEventListener);
  }
}

function deleteTaskEventListener() {
  let taskForm = this.parentElement.parentElement;
  deleteTask(taskForm, taskForm.id);
}

// delete lists
// FIX LISTS MISTAKE, EVENT HAPPENS MULTIPLE TIMES ON CLICK
function deleteList(form, list_id) {
  console.log(form);
  console.log(list_id);
  form.remove();
  let index = lists
    .map((x) => {
      return x.id;
    })
    .indexOf(Number(list_id));
  deleteListFromTasks(list_id);
  lists.splice(index, 1);
  console.log(lists);
  localStorage.setItem("lists", JSON.stringify(lists));
}

function deleteListFromTasks(list_id) {
  let list = findList(Number(list_id));

  for (let i = 0; i < list.tasks.length; i++) {
    let task = JSON.parse(localStorage.getItem(list.tasks[i]));
    task.list = 1;
    localStorage.setItem(task.id, JSON.stringify(task));
    let replaceTask = allTasks.find((x) => x.id === task.id);
    Object.assign(replaceTask, task);
  }
}

function adddDeleteButtonListenersToLists(element) {
  let buttons = element.getElementsByClassName("list-delete-button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", deleteListEventListener);
  }
}

function deleteListEventListener() {
  let listForm = this.parentElement;
  deleteList(listForm, listForm.id);
}

function removeChosenClassFromTabs() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("chosen");
  }
}

function changeTabColor(tab) {
  tab.classList.add("chosen");
}

function addSearchEventListener(element) {
  element.addEventListener("input", function () {
    let result = search(element.value, allTasks);
    changePageTitle("Search");
    clearTaskPage();
    populateTaskPage(result);
  });
}

function search(input, object) {
  let search = new JsSearch.Search("id");
  search.addIndex("name");
  search.addIndex("note");
  search.addDocuments(object);
  return search.search(input);
}

function testEventListener() {
  let test = document.getElementById("test");
  test.addEventListener("click", loadTestData, { once: true });
}
function loadTestData() {
  for (let i = 0; i < testTasks.length; i++) {
    allTasks.push(testTasks[i]);
  }
  for (let j = 0; j < testLists.length; j++) {
    lists.push(testLists[j]);
  }
  console.log(allTasks);
  for (let i = 0; i < allTasks.length; i++) {
    localStorage.setItem(allTasks[i].id, JSON.stringify(allTasks[i]));
  }
  localStorage.setItem("lists", JSON.stringify(lists));
}

let testTasks = [
  {
    id: "lna9x3r871ypp20mtws",
    name: "Bread",
    note: "I need to buy bread at the local store",
    deadline: "04.10.2023, 22:00",
    done: false,
    list: "1696334726515",
    date: 1696334765990,
  },
  {
    id: "lna9ynilrencmbyw2f",
    name: "Bananas",
    note: "",
    deadline: null,
    done: false,
    list: "1696334726515",
    date: 1696334835819,
  },
  {
    id: "lna9yybwzeq9tzw0ob",
    name: "Milk",
    note: "",
    deadline: null,
    done: false,
    list: "1696334726515",
    date: 1696334853428,
  },
  {
    id: "lnalrgwd6n9mods1asd",
    name: "Buy a present for Mike's birthday",
    note: "",
    deadline: null,
    done: true,
    list: "1696334753729",
    date: 1696354671181,
  },
  {
    id: "lnalyjhauvid5x3i7dj",
    name: "Do the schedule",
    note: "",
    deadline: "04.10.2023, 19:43",
    done: true,
    list: "1696334736029",
    date: 1696354995052,
  },
];

let testLists = [
  {
    name: "Groceries",
    color: "#d32727",
    tasks: ["lna9yybwzeq9tzw0ob", "lna9x3r871ypp20mtws"],
    id: 1696334726515,
  },
  {
    name: "Work",
    color: "#6cd327",
    tasks: ["lnalyjhauvid5x3i7dj"],
    id: 1696334736029,
  },
  {
    name: "Mike's birthday party",
    color: "#2a27d3",
    tasks: ["lnalrgwd6n9mods1asd"],
    id: 1696334753729,
  },
];
