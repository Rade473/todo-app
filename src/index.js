import "./style.css";
import {
  setDateTimePicker,
  setTaskForms,
  setTextArea,
  setDoneCheckers,
  closeMenusOnOutsideClick,
  uniqueId,
} from "./helper";

window.onload = function () {
  setDateTimePicker(document);
  setTextArea(document);
  setTaskForms(document);
  setDoneCheckers(document);
  setFormSubmit(document);
  closeMenusOnOutsideClick();
  setNewTaskButton();
};

// HTML element is created and appended
function createNewTaskForm() {
  const hiddenForm = document.getElementById("hidden-form-container");
  const newForm = hiddenForm.cloneNode(true);
  newForm.setAttribute("id", uniqueId());
  newForm.removeAttribute("hidden");
  console.log(newForm);
  const tasksContainer = document.getElementById("tasks-container");
  tasksContainer.appendChild(newForm);
  setListenersForFormElements(newForm);
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
  newTaskButton.addEventListener("click", createNewTaskForm);
}

function setFormSubmit(element) {
  const formName = element.getElementsByClassName("new-task-name");
  formName[0].addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
      saveTask(this.parentElement.parentElement.parentElement);
    }
  });
}

function saveTask(data) {
  let name = data.getElementsByClassName("new-task-name")[0].value;
  let note = data.getElementsByClassName("new-task-notes")[0].value;
  let deadline = data.getElementsByClassName("new-task-deadline")[0].value;
  let done = data.getElementsByClassName("task-done")[0].checked;
  let date = Date.now();
  const task = createTask(name, note, deadline, done, date);

  if (data.id in localStorage) {
    changeTask(data.id, name, note, deadline, done);
    console.log(localStorage.getItem(data.id));
  } else {
    localStorage.setItem(data.id, JSON.stringify(task));
    console.log(localStorage.getItem(data.id));
  }
}

function createTask(name, note, deadline, done, date) {
  return {
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
}
