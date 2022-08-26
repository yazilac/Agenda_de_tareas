import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTasks.js";

export const addTaks = (evento) =>{
    evento.preventDefault();

    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]"); //accerder al calendario

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY"); // uso de moment format libreria

    if(value === "" || date === ""){ // para que no pueda ingresar datos vacios
        return;
    }
    input.value = ""; //limpiar cajas
    calendar.value = "";

    const complete = false;

    const taskObj = {     //crear objeto
        value,
        dateFormat,
        complete,
        id: uuid.v4(), // uso de libreria uuid para identificar cual elemento tenemos seleccionado
    }
    list.innerHTML = "";
    const taskList = JSON.parse(localStorage.getItem('tasks'))|| []; // almacenar informacion en el localStorage la devuelve el formato JSON
    //sessionStorage.setItem('tasks',JSON.stringify(taskObj)); //sessionStorage
    taskList.push(taskObj); //agregando la tarea
    localStorage.setItem('tasks',JSON.stringify(taskList)); // localStorage convirtiendo todo a string
    
    displayTasks();
    //const task = createTask(taskObj);  // creando la tarea
    //list.appendChild(task); //enviando la tarea a la lista
}

export const createTask = ({value,dateFormat, complete, id}) => {
    const task = document.createElement("li");
        task.classList.add("card");
        task.classList.toggle("dark")

    const taskContent = document.createElement("div");
    
    const check = checkComplete(id); //acceder a la funcion checkComplete por medio de id
    if(complete){
        check.classList.toggle('fas'); // con el toggle podemos agregar o quitar una clase tambien se puede usar el add o remove
        check.classList.toggle('completeIcon'); //asigno esta clase para que se cambie el
        check.classList.toggle('far');//color de la tarea si esta es completada = true;
    }

    const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerHTML = value;
        taskContent.appendChild(check); //asignar  el checkComplete por medio de la varible check
        taskContent.appendChild(titleTask);
    //backtics
    // task.innerHTML = content;
    const dateElement = document.createElement("span");
        dateElement.innerHTML = dateFormat;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon(id));
    return task;
};