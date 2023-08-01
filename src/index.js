import "./style.css";
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + tx[i].scrollHeight + "px;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = this.scrollHeight + "px";
}
const dateTimePicker = document.getElementById("new-task-deadline");
dateTimePicker.addEventListener("focus", DateonFocus);
dateTimePicker.addEventListener("blur", DateonBlur);

function DateonFocus() {
  this.type = "datetime-local";
  this.showPicker();
}

function DateonBlur() {
  if (this.value.length == 0) this.type = "";
}
