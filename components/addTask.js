import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTaks = (event) =>{
    const list = document.querySelector("[data-list]");
    const task = createTask(event);
    list.appendChild(task);
    
}


const createTask = (evento) => {
    evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem('tasks'))|| []; // almacenar informacion
    console.log(taskList);
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]"); //accerder al calendario
 
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");

   // console.log(dateFormat);
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    console.log(value,dateFormat);
    //crear objeto
    const taskObj = {
        value,
        dateFormat
    }
    taskList.push(taskObj);

    //sessionStorage.setItem('tasks',JSON.stringify(taskObj)); //sessionStorage
    localStorage.setItem('tasks',JSON.stringify(taskList)); // localStorage
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerHTML = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    //backtics
    //   task.innerHTML = content;
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;

    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
};