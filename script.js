//importando modulos
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const task = document.createElement("li");
    const list = document.querySelector("[data-list]");
    task.classList.add("card");
    input.value = "";
    const taskContent = document.createElement("div");

    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerHTML = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    //backtics
    //   task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
};
//Arrows functions o funciones anonimas
//listener evento luego la accion
btn.addEventListener("click", createTask);
