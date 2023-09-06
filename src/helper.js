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
  // Get the modal
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
  let openMenus = document.getElementsByClassName("new-task-info show");
  if (openMenus.length > 0) {
    for (let i = 0; i < openMenus.length; i++) {
      openMenus[i].classList.remove("show");
    }
  }
}

function showFullMenu() {
  closeMenus();
  this.classList.add("show");
}

function taskFormListener(form) {
  form.addEventListener("click", showFullMenu);
}

export function closeMenusOnOutsideClick() {
  document.addEventListener("click", function (event) {
    const doneCheckers = document.getElementsByClassName("task-done");
    for (let i = 0; i < doneCheckers.length; i++) {
      if (doneCheckers[i].contains(event.target)) {
        return;
      }
    }
    if (
      event.target.closest("div.new-task-info.show") !== null &&
      event.target.closest("div.new-task-info.show").classList.contains("show")
    ) {
      return;
    } else {
      closeMenus();
    }
  });
}

export function listOptionsController(task) {
  if (task.value == "Add a list") {
    console.log("remove this task from any lists");
  } else if (task.value === "new-list") {
    console.log("create new list");
  } else {
    console.log("chosen list");
  }
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
    option.value = lists[i].name;
    option.textContent = lists[i].name;
    element.prepend(option);
  }
}

function doneCheckersListener(check) {
  check.addEventListener("click", function (event) {
    let a = check.parentElement.parentElement.nextElementSibling;
    if (a.classList.contains("show")) {
      return;
    }
    if (!a.classList.contains("show")) {
      closeMenus();
      a.classList.add("show");
    }
  });
}

export function setDoneCheckers(element) {
  const doneCheckers = element.getElementsByClassName("task-done");
  for (let i = 0; i < doneCheckers.length; i++) {
    doneCheckersListener(doneCheckers[i]);
  }
}

function selectListOptions(choice) {}

// Expand animation
// const button = document.querySelector(".button");

// button.addEventListener("click", () => {
//   const content = document.querySelector(".collapsible");
//   expandElement(content, "collapsed");
// });

// function expandElement(elem, collapseClass) {
//   elem.style.height = "";
//   elem.style.transition = "none";

//   const startHeight = window.getComputedStyle(elem).height;

//   elem.classList.toggle(collapseClass);
//   const height = window.getComputedStyle(elem).height;
//   elem.style.height = startHeight;

//   requestAnimationFrame(() => {
//     elem.style.transition = "";

//     requestAnimationFrame(() => {
//       elem.style.height = height;
//     });
//   });
//   elem.addEventListener("transitionend", () => {
//     elem.style.height = "";
//     elem.removeEventListener("transitionend", this);
//   });
// }
