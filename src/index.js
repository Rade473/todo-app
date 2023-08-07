import "./style.css";
import {
  setDateTimePicker,
  setTaskForms,
  setTextArea,
  setDoneCheckers,
  closeMenusOnOutsideClick,
} from "./helper";

window.onload = function () {
  setDateTimePicker();
  setTextArea();
  setTaskForms();
  setDoneCheckers();
  closeMenusOnOutsideClick();
};
