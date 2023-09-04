import { parse } from "date-fns";
import { format } from "date-fns";

export function fillTaskData(form, task) {
  form.setAttribute("id", task.id);
  let formElements = getFormElements(form);

  formElements.nameInput.value = task.name;
  formElements.noteInput.value = task.note;
  formElements.deadlineInput.value = parse(
    task.deadline,
    "dd.MM.yyyy, HH:mm",
    new Date()
  );

  console.log(formElements.deadlineInput.value);

  formElements.doneInput.checked = task.done;
  return form;
}

export function getFormElements(form) {
  let nameInput = form.getElementsByClassName("new-task-name")[0];
  let noteInput = form.getElementsByClassName("new-task-notes")[0];
  let deadline = form.getElementsByClassName("new-task-deadline")[0];
  let done = form.getElementsByClassName("task-done")[0];

  return {
    nameInput: nameInput,
    noteInput: noteInput,
    deadlineInput: deadline,
    doneInput: done,
  };
}

export function createNewListForm(name, color) {
  const hiddenListForm = document.getElementById("hidden-list");
  const newList = hiddenListForm.cloneNode(true);
  newList.setAttribute("id", "");
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
  return newForm;
}

function uniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
