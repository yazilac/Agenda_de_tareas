import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const displayTasks = () =>{
    const List = document.querySelector("[data-list]"); //lsita para agregar las tareas
    const tasksList = JSON.parse(localStorage.getItem('tasks')) || []; // informacion almacenada
    const dates = uniqueDates(tasksList); //ARREGLO DE FECHAS
    orderDates(dates); //ordedando las fechas de menor a mayor

    dates.forEach((date) =>{ // separando las fechas
        const dateMoment = moment(date,"DD/MMM/YYYY"); //creando objeto moment
        List.appendChild(dateElement(date))
        tasksList.forEach((task) =>  {
            //List.appendChild(dateElement(task.dateFormat)); //creando fecha en lista
            const taskDate = moment(task.dateFormat, "DD/MMM/YYYY");
            const diff = dateMoment.diff(taskDate); //buscar diferencia
            if(diff ===0){ // condicion de si es igual se crea
                List.appendChild(createTask(task)); // Agregar las tareas a la lista mediante forEach
            }

        });
    })


}