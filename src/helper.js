export function setTextArea() {
  const tx = document.getElementsByTagName("textarea");
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + tx[i].scrollHeight + "px;");
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = 0;
    this.style.height = this.scrollHeight + "px";
  }
}

export function setDateTimePicker() {
  const dateTimePicker = document.getElementsByClassName("new-task-deadline");
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

export function setTaskForms() {
  const taskForms = document.getElementsByClassName("new-task-info");
  for (let i = 0; i < taskForms.length; i++) {
    taskForms[i].addEventListener("click", showFullMenu);
  }

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
      let openMenus = document.getElementsByClassName("new-task-info show");
      if (openMenus.length > 0) {
        for (let i = 0; openMenus.length > i; i++) {
          openMenus[i].classList.remove("show");
        }
      }
    }
  });

  function showFullMenu() {
    let openMenus = document.getElementsByClassName("new-task-info show");
    if (openMenus.length > 0) {
      for (let i = 0; i < openMenus.length; i++) {
        openMenus[i].classList.remove("show");
      }
    }
    this.classList.add("show");
  }
}

export function setDoneCheckers() {
  const doneCheckers = document.getElementsByClassName("task-done");
  for (let i = 0; i < doneCheckers.length; i++) {
    doneCheckers[i].addEventListener("click", function (event) {
      let a = doneCheckers[i].parentElement.parentElement.nextElementSibling;
      if (a.classList.contains("show")) {
        return;
      }
      if (!a.classList.contains("show")) {
        let openMenus = document.getElementsByClassName("new-task-info show");
        if (openMenus.length > 0) {
          for (let i = 0; i < openMenus.length; i++) {
            openMenus[i].classList.remove("show");
          }
        }
        a.classList.add("show");
      }
    });
  }
}
