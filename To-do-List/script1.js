
document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.getElementById('add-btn');
    const filterUncheckedBtn = document.getElementById('filter-unchecked-btn');
    const filterCheckedBtn = document.getElementById('filter-checked-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addBtn.addEventListener('click', addTask);
    filterUncheckedBtn.addEventListener('click', () => {
        if (filterUncheckedBtn.innerText === 'Show Unchecked') {
            filterUncheckedTasks();
            filterUncheckedBtn.innerText = 'Show All';
        } else {
            showAllTasks();
            filterUncheckedBtn.innerText = 'Show Unchecked';
            filterCheckedBtn.innerText = 'Show Checked';
        }
    });
    filterCheckedBtn.addEventListener('click', () => {
        if (filterCheckedBtn.innerText === 'Show Checked') {
            filterCheckedTasks();
            filterCheckedBtn.innerText = 'Show All';
        } else {
            showAllTasks();
            filterCheckedBtn.innerText = 'Show Checked';
            filterUncheckedBtn.innerText = 'Show Unchecked';
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" class="task-checkbox"> 
                <span>${taskText}</span>
                <button class="delete-btn">x</button>
            `;
            taskList.appendChild(li);
            newTaskInput.value = '';

            const deleteBtn = li.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => li.remove());
        }
    }

    function filterUncheckedTasks() {
        const tasks = taskList.querySelectorAll('li');
        tasks.forEach(task => {
            const checkbox = task.querySelector('.task-checkbox');
            if (checkbox.checked) {
                task.style.display = 'none';
            } else {
                task.style.display = 'flex';
            }
        });
    }

    function filterCheckedTasks() {
        const tasks = taskList.querySelectorAll('li');
        tasks.forEach(task => {
            const checkbox = task.querySelector('.task-checkbox');
            if (checkbox.checked) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            }
        });
    }

    function showAllTasks() {
        const tasks = taskList.querySelectorAll('li');
        tasks.forEach(task => {
            task.style.display = 'flex';
        });
    }
});
