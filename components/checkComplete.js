const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far','fa-check-square','icon'); // agregar varias clases separando con comillas
    i.addEventListener('click', completeTask);
    return i;
};
//Immediately invoked function expression IIFE
//completar tarea
const completeTask = (event) =>{
    const element = event.target;
    element.classList.toggle('fas'); // con el toggle podemos agregar o quitar una clase tambien se puede usar el add o remove
    element.classList.toggle('completeIcon')
    element.classList.toggle('far');
};

export default checkComplete;