const btnAddTask = document.querySelector('#btn-add-task');
btnAddTask.addEventListener('click', handleAddClick);

function handleAddClick(){
    const listTasks = document.querySelector('#task-list');

    const div = document.createElement('div');    
    const li = document.createElement('li');    
    const p = document.createElement('p');
    const button = document.createElement('button');    
    const task = document.querySelector('#task');
    
    // add styles
    button.setAttribute('class', 'btn btn-danger');
    div.setAttribute('class', 'd-flex justify-content-between align-items-center')
    li.setAttribute('class', 'list-group-item')

    p.textContent = task.value;

    button.textContent = 'Delete';
    button.addEventListener('click', handleDeleteClick);

    div.appendChild(p);
    div.appendChild(button);
    li.appendChild(div);
    listTasks.appendChild(li);    
}

function handleDeleteClick(event){
    const btn = event.target;
    
    // 1st parentNode for Div, 2nd is for li
    const li = btn.parentNode.parentNode;
    
    console.log(li);    
    li.remove();
}