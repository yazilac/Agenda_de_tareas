const checkComplete = (id) => {
    const i = document.createElement('i');
    i.classList.add('far','fa-check-square','icon'); // agregar varias clases separando con comillas
    i.addEventListener('click', (event) => completeTask(event,id));
    return i;
};
//Immediately invoked function expression IIFE
//completar tarea
const completeTask = (event, id) =>{
    const element = event.target;
    element.classList.toggle('fas'); // con el toggle podemos agregar o quitar una clase tambien se puede usar el add o remove
    element.classList.toggle('completeIcon')
    element.classList.toggle('far');
    const tasks = JSON.parse(localStorage.getItem('tasks')); //obtiene la tarea
    const index = tasks.findIndex((item) => item.id === id); //indice del arreglo uso id para indentificar la tarea
    tasks[index]['complete'] = !tasks[index]['complete']; // uso ! para saber que la tarea concluyo
    localStorage.setItem('tasks', JSON.stringify(tasks)); // cargo las tareas ya actualizadas
    //console.log(tasks)
};

export default checkComplete;