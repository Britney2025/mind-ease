function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
    const list = document.getElementById("taskItems");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <input type="checkbox" ${task.done ? "checked" : ""} onchange="toggleDone(${index})"/>
        <span class="${task.done ? 'done' : ''}">${task.text}</span>
        <button onclick="deleteTask(${index})">🗑</button>
        `;
        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();
    if (!text) return;

    const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
    tasks.push({ text, done: false });
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
}

function toggleDone(index) {
    const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
    tasks[index].done = !tasks[index].done;
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    loadTasks();
}

function deleteTask(index) {
    showConfirm("Are you sure you want to delete this task?", () => {
        const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
        tasks.splice(index, 1);
        localStorage.setItem("myTasks", JSON.stringify(tasks));
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