( () => {
    const btn =  document.querySelector('[data-form-btn]');

    const createTask = (evento)=>{
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        const task = document.createElement('li');
        const list = document.querySelector("[data-list]");
        task.classList.add('card');
        input.value = "";
        const taskContent = document.createElement('div');
        taskContent.appendChild(checkComplete());
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerHTML = value;
        taskContent.appendChild(titleTask);
        //backtics
        const content = `<i class="fas fa-trash-alt trashIcon icon"></i> `;
    //   task.innerHTML = content;
        task.appendChild(taskContent);
        list.appendChild(task);
    }
    //Arrows functions o funciones anonimas
    //listener evento luego la accion
    btn.addEventListener('click', createTask);
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
    }
})();

