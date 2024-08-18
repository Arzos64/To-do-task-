
// variables

let input = document.getElementById('todo');
let button = document.getElementById('add');
let list = document.getElementById('listTask');

// hacer una funcion que agregue la tarea

function addTask() {

    if(input.value) {
        //crear el elemento de la tarea y agregarle la clase
        let newtask = document.createElement('div');
        newtask.classList.add('task');

        //crear el parrafo y asignarle el valor del input
        let text = document.createElement('p');
        text.innerHTML = todo.value;
        newtask.appendChild(text);


        //agregar iconos a las tareas
        let icons = document.createElement('div');
        icons.classList.add('icons');
        newtask.appendChild(icons);

        //icono comletar
        let complete = document.createElement('i');
        complete.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        icons.appendChild(complete);
        complete.addEventListener('click', completeTask);

        //icono eliminar
        let remove = document.createElement('i');
        remove.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        icons.appendChild(remove); 
        remove.addEventListener('click', removeTask);

        //agregar los iconos a la tarea
        icons.appendChild(complete, remove);


        //agregar la tarea a la lista
        list.appendChild(newtask);
    }else {
        alert('you could add a task');
    }
}

//crear una funcion para cuando una tarea se complete se le apliquen los estilos que la marquen como completada
function completeTask(event) {
    let task = event.target.parentElement.parentElement;
    task.classList.toggle('completed');
}

//eliminar una tarea
function removeTask(event) {
    let task = event.target.parentElement.parentElement;
    list.removeChild(task);
}



//agregar la tarea al hacer click en el boton
button.addEventListener('click', addTask);