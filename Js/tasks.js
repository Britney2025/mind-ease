window.onload = loadTasks;
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

    tasks.sort((a, b) => {
        //Sort undone first
        if (a.done !== b.done) return a.done - b.done;
        //Sort by date
        return new Date(a.due) - new Date(b.due);
    });

    const list = document.getElementById("taskItems");
    list.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = "task-item";
        //Due date check
        let dueLabel = "";
        if (task.dueDate) {
            const today = new Date().toISOString().split("T")[0];//y/m/d
            if (task.dueDate === today) {
                dueLabel = "<span class='due-label due-today'>🟡 Due today</span>";
            } else if (task.dueDate < today) {
                dueLabel = "<span class='due-label overdue'>🔴 Overdue</span>";
            }
        }

        li.innerHTML = `
        <input type="checkbox" ${task.done ? "checked" : ""} onchange="toggleDone(${task.id})"/>
        <span class="${task.done ? 'done' : ''}">${task.text} ${task.dueDate ? `<small>(${task.dueDate})` : ""} ${dueLabel}</span>
        <button onclick="deleteTask(${task.id})">🗑</button>
        `;
        list.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const dueInput = document.getElementById("taskDue");
    const text = taskInput.value.trim();
    const dueDate = dueInput.value;
    if (!text) return;

    const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

    const newTask = {
        id: Date.now(),
        text: text,
        dueDate: dueDate,
        done: false
    };

    tasks.unshift(newTask);
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    taskInput.value = "";
    dueInput.value = "";
    loadTasks();
};
 
function toggleDone(id) {
    const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.done = !task.done;
        localStorage.setItem("myTasks", JSON.stringify(tasks));
        loadTasks();
    }
}

function deleteTask(id) {
    showConfirm("Are you sure you want to delete this task?", () => {
        const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
        const updatedTasks = tasks.filter(task => task.id !== id)
        // tasks.splice(index, 1);
        localStorage.setItem("myTasks", JSON.stringify(updatedTasks));
        loadTasks();
    })
}

loadTasks();

function showConfirm(message, onConfirm) {
    const modal = document.getElementById("confirmModal");
    const msg = document.getElementById("confirmMessage");
    const yesBtn = document.getElementById("confirmYes");
    const noBtn = document.getElementById("confirmNo");

    msg.textContent = message;
    modal.style.display = "flex";

    yesBtn.onclick = () => {
        modal.style.display = "none";
        onConfirm();
    };

    noBtn.onclick = () => {
        modal.style.display = "none"
    };
}

const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
function openSidebar() {
    sidebar.classList.add("open");
    hamburger.style.display = "none";
}
function closeSidebar() {
    sidebar.classList.remove("open");
    hamburger.style.display = "block";
}
// const sidebar = document.getElementById("sidebar");
// const hamburger = document.getElementById("hamburger");

// function toggleSidebar() {
//     sidebar.classList.toggle("open");
//     hamburger.style.display = sidebar.classList.contains("open") ? "none" : "block";
// }

// function toggleSidebar() {
//     const sidebar = document.getElementById("sidebar");
//     sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
// }

// function closeSidebar() {
//     document.getElementById("sidebar").style.width = "0";
// }