//importando modulos
import { addTaks } from "./components/addTask.js";

const btn = document.querySelector("[data-form-btn]");


//Arrows functions o funciones anonimas
//listener evento luego la accion
btn.addEventListener("click", addTaks);
