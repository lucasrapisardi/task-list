const createTask = (event) => {
    event.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const value = input.value;

    const task = document.createElement('li');
    task.classList.add('task');
    const content = `<p class="content">${value}<p>`;

    task.innerHTML = content;

    task.appendChild(CompleteButton());
    list.appendChild(task);
    input.value = " ";
}

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', (createTask));

const CompleteButton = () => {
    const completeButton = document.createElement('button');
    
    completeButton.classList.add('check-button');
    completeButton.innerText = 'Done';

    completeButton.addEventListener('click', completeTask);
    
    return completeButton;
}

const completeTask = (event) => {
    const completeButton = event.target;

    const doneTask = completeButton.parentElement;

    doneTask.classList.toggle('done');
}