export function fillTaskData(form, task) {
  form.setAttribute("id", task.id);
  let formElements = getFormElements(form);
  formElements.nameInput.value = task.name;
  formElements.noteInput.value = task.note;
  if (task.deadline.length > 0) {
    formElements.deadlineInput.value = convertDate(new Date(task.deadline));
  } else {
    formElements.deadlineInput.value = task.deadline;
  }
  formElements.doneInput.checked = task.done;
  return form;
}

function convertDate(date) {
  return date.toLocaleTimeString([], {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
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

function addEventListenersToTabs() {
  const todayTab = documennt.getElementById("today-tab");
  const plannedTab = document.getElementById("planned-tab");
  const allTab = document.getElementById("all-tab");
  const doneTab = document.getElementById("done-tab");
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
