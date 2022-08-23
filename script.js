const btn =  document.querySelector('[data-form-btn]');


const createTask = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const task = document.createElement('li');
    const list = document.querySelector("[data-list]");
    task.classList.add('card');
    //backtics
    const content = ` <div>
                    <i class="far fa-check-square icon"></i>
                    <span class="task">${value}</span>
                    </div>
                    <i class="fas fa-trash-alt trashIcon icon"></i> `;
    task.innerHTML = content;
    list.appendChild(task);
    input.value = "";

    console.log(content);
}

console.log(btn);

//Arrows functions o funciones anonimas
//listener evento luego la accion
btn.addEventListener('click', createTask);
    
    
    

