import "./style.css";
import {
  setDateTimePicker,
  setTaskForms,
  setTextArea,
  setDoneCheckers,
} from "./helper";

window.onload = function () {
  setDateTimePicker();
  setTextArea();
  setTaskForms();
  setDoneCheckers();
};
