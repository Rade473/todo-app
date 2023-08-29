import { parse } from "date-fns";
import { format } from "date-fns";

export function fillTaskData(form, task) {
  form.setAttribute("id", task.id);
  let formElements = getFormElements(form);

  formElements.nameInput.value = task.name;
  formElements.noteInput.value = task.note;

  formElements.deadlineInput.value = format(
    parse(task.deadline, "dd.MM.yyyy',' HH:mm", new Date()),
    "dd.MM.yyyy',' HH:mm"
  );

  formElements.doneInput.checked = task.done;
  return form;
}

export function getFormElements(form) {
  const nameInput = form.getElementsByClassName("new-task-name")[0];
  const noteInput = form.getElementsByClassName("new-task-notes")[0];
  const deadline = form.getElementsByClassName("new-task-deadline")[0];
  const done = form.getElementsByClassName("task-done")[0];
  return {
    nameInput: nameInput,
    noteInput: noteInput,
    deadlineInput: deadline,
    doneInput: done,
  };
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
