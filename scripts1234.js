document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const action = e.target.getAttribute('data-action');
            if (action === 'remove') {
                removeTask(e.target.parentElement);
            } else if (action === 'done') {
                toggleComplete(e.target.parentElement);
            }
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('data-action', 'remove');
        li.appendChild(removeBtn);

        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Done';
        doneBtn.setAttribute('data-action', 'done');
        li.appendChild(doneBtn);

        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        li.appendChild(dateInput);

        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }

    function removeTask(task) {
        taskList.removeChild(task);
    }

    function toggleComplete(task) {
        task.classList.toggle('completed');
    }
});
