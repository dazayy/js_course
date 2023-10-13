const input = document.getElementById("input");
const add = document.getElementById("add");
const taskList = document.getElementById("task-field");


const notes = [];

function rednder() {
    taskList.innerHTML = "";

    if (notes.length === 0) {
        taskList.innerHTML = "<h2 class='title'>Нет задач</h2>"
    }

    for (let i = 0; i < notes.length; i++) {
        taskList.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i))
    }
}
rednder();

add.onclick = function() {
    
    if (input.value.length === 0) {
    return 
}

    const newNote = {
        title: input.value,
        completed: false
    }
    notes.push(newNote);
    rednder();
    input.value = "";
}

taskList.onclick = function(event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index);
        const type = event.target.dataset.type;

        if (type === "toggle") {
            notes[index].completed = !notes[index].completed;
        }
        else if (type === "remove") {
            notes.splice(index, 1);
        }
    }

    rednder();
}

function getNoteTemplate(note, index) {
    return `
    <li class="taks-item">
        <p id="task-description" class="task-text ${note.completed ? "text-decoration-line-through" : ""}">${note.title}</p>
        <div class="btns">
            <a data-type="toggle" id="done" class="primary-btn done" href="#" data-index=${index}>&check;</a>
            <a data-type="remove" id="delete" class="primary-btn delete" href="#" data-index=${index}>&times;</a>
        </div>
    </li>`
}
