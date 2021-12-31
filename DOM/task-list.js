const createTask = (event) => {
    event.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    console.log(value);
    input.value = " ";

    const task = document.querySelector('[data-task]');
    
}

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', (createTask));
