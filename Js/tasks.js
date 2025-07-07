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
    tasks.push({text, done: false });
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
    const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    loadTasks();
}

loadTasks();

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}