//Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event Listeners
loadEventListeners();

function loadEventListeners() {
    //Add tasks event
    form.addEventListener('submit', addTask);
}

//Add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a Task');
    }

    //Creat li element
    const li = document.createElement('li');
    //Add a class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);

    //append li to ul

    console.log(li);
    taskList.appendChild(li);

    //Clear the input
    taskInput.value = '';

    e.preventDefault();
}
