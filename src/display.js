import { parse } from "date-fns";

export function fillTaskData(form, task) {
  form.setAttribute("id", task.id);
  let formElements = getFormElements(form);

  formElements.nameInput.value = task.name;
  formElements.noteInput.value = task.note;

  function checkifDateEntered() {
    if (task.deadline !== null) {
      return parse(task.deadline, "dd.MM.yyyy, HH:mm", new Date());
    } else {
      return "";
    }
  }
  formElements.deadlineInput.value = checkifDateEntered();
  formElements.doneInput.checked = task.done;
  formElements.listInput.value = task.list;

  return form;
}

export function getFormElements(form) {
  let nameInput = form.getElementsByClassName("new-task-name")[0];
  let noteInput = form.getElementsByClassName("new-task-notes")[0];
  let deadline = form.getElementsByClassName("new-task-deadline")[0];
  let done = form.getElementsByClassName("task-done")[0];
  let listInput = form.getElementsByClassName("select-list")[0];

  return {
    nameInput: nameInput,
    noteInput: noteInput,
    deadlineInput: deadline,
    doneInput: done,
    listInput: listInput,
  };
}

export function createNewListForm(name, color, id) {
  const hiddenListForm = document.getElementById("hidden-list");
  const newList = hiddenListForm.cloneNode(true);
  newList.setAttribute("id", id);
  let title = newList.getElementsByTagName("p")[0];
  title.textContent = name;
  let icon = newList.getElementsByClassName("icon")[0];
  icon.style.background = color;
  document.getElementById("lists-container").appendChild(newList);
}

export function createNewTaskForm() {
  const hiddenForm = document.getElementById("hidden-form-container");
  const newForm = hiddenForm.cloneNode(true);
  newForm.setAttribute("id", uniqueId());
  newForm.removeAttribute("hidden");
  newForm.classList.add("task-with-id");
  return newForm;
}

function uniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

const pageTitle = document.getElementById("page-title");
export function changePageTitle(title) {
  pageTitle.textContent = title;
}

export function changeTitleColor(color) {
  pageTitle.style.color = color;
}
