var form = 0;
var list = 0;

form.onsubmit = function(e){
    form = document.getElementById('form');
    list = document.getElementById('task');
    e.preventDefault();
    const inputField = document.getElementById('tarefas');
    addTask(inputField.value);
    console.log();
    form.reset();
};

function addTask(inputField){
    const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.setAttribute('class', 'lista');
    taskLabel.setAttribute(taskDescriptionNode);
    
    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer);
}