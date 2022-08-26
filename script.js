//importando modulos
import { addTaks } from "./components/addTask.js";
import { displayTasks } from "./components/readTasks.js";
import { modo } from "./Modo.js";
const btn = document.querySelector("[data-form-btn]");
const btnSwitch = document.querySelector("#switch");


//Arrows functions o funciones anonimas
//listener evento luego la accion
btn.addEventListener("click", addTaks);
btnSwitch.addEventListener("click",modo)

displayTasks();