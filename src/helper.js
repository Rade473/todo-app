import { saveTask } from "./index.js";

export function setTextArea(element) {
  const tx = element.getElementsByTagName("textarea");
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + tx[i].scrollHeight + "px;");
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = 0;
    this.style.height = this.scrollHeight + "px";
  }
}

export function setDateTimePicker(element) {
  const dateTimePicker = element.getElementsByClassName("new-task-deadline");
  for (let i = 0; i < dateTimePicker.length; i++) {
    dateTimePicker[i].addEventListener("focus", DateonFocus);
    dateTimePicker[i].addEventListener("blur", DateonBlur);
  }

  function DateonFocus() {
    this.type = "datetime-local";
    this.showPicker();
  }

  function DateonBlur() {
    if (this.value.length == 0) this.type = "";
  }
}

export function setLocalStorageButton() {
  const clearStorageButton = document.getElementById("clear-storage");
  clearStorageButton.addEventListener("click", clearStorage);
}

function clearStorage() {
  localStorage.clear();
}

export function newListForm() {
  var modal = document.getElementById("myModal");
  // Get the button that opens the modal
  const newListButton = document.getElementById("new-list");
  // Get the <span> element that closes the modal

  var newname = document.getElementById("new-list-name");
  // When the user clicks on the button, open the modal
  newListButton.onclick = function () {
    modal.classList.add("show");
    newname.focus();
  };
  // When the user clicks on <span> (x), close the modal
  const saveListButton = document.getElementById("save-list");
  saveListButton.onclick = function () {
    modal.classList.remove("show");
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove("show");
    }
  };
}

function closeMenus() {
  let openMenus = document.getElementsByClassName("accordeon-content show");

  if (openMenus.length > 0) {
    for (let i = 0; i < openMenus.length; i++) {
      saveTask(openMenus[i].parentElement.parentElement.parentElement);
      openMenus[i].parentElement.classList.remove("show");
      openMenus[i].classList.remove("show");
    }
  }
}

function showFullMenu() {
  closeMenus();
  this.firstChild.nextElementSibling.nextElementSibling.classList.add("show");
  console.log();
}

function taskFormListener(form) {
  form.addEventListener("click", showFullMenu);
}
// unused

export function closeMenusOnOutsideClick() {
  document.addEventListener("click", function (event) {
    const doneCheckers = document.getElementsByClassName("task-done");
    for (let i = 0; i < doneCheckers.length; i++) {
      if (doneCheckers[i].contains(event.target)) {
        return;
      }
    }

    let target1 = event.target.parentElement.nextElementSibling;
    let target2 = event.target.nextElementSibling;
    if (target1) {
      if (target1.classList.contains("show")) {
        return;
      } else if (target2) {
        if (event.target.nextElementSibling.classList.contains("show")) {
          return;
        }
      } else {
        closeMenus();
      }
    }
  });
}

export function setTaskForms(element) {
  const taskForms = element.getElementsByClassName("new-task-info");
  for (let i = 0; i < taskForms.length; i++) {
    taskFormListener(taskForms[i]);
  }
}

export function addOptionToTheListSelect(element, lists) {
  for (let i = 0; i < lists.length; i++) {
    let option = document.createElement("option");
    option.value = lists[i].id;
    option.textContent = lists[i].name;
    element.append(option);
  }
}

function doneCheckersListener(check) {
  check.addEventListener("click", function () {
    saveTask(check.parentElement.parentElement.parentElement.parentElement);
    let a =
      check.parentElement.parentElement.nextElementSibling.querySelector(
        ":nth-child(2)"
      );
    if (a.classList.contains("show")) {
      return;
    }
    if (!a.classList.contains("show")) {
      closeMenus();
    }
  });
}

export function setDoneCheckers(element) {
  const doneCheckers = element.getElementsByClassName("task-done");
  for (let i = 0; i < doneCheckers.length; i++) {
    doneCheckersListener(doneCheckers[i]);
  }
}
