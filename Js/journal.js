function saveJournal() {
    const text = document.getElementById("journal-text").value.trim();

    if (!text) return;
    const date = new Date().toLocaleString();
    const entry = { text, date };

    const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    entries.unshift(entry);

    localStorage.setItem("journalEntries", JSON.stringify(entries));

    document.getElementById("journal-text").value = "";
    document.getElementById("saveMsg").innerText = "Entry Saved!";
    setTimeout(() => {
        document.getElementById("saveMsg").innerText = ""
    }, 3000);
    displayEntries();
}

function displayEntries() {
    const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];

    const list = document.getElementById("entryList");
    list.innerHTML = "";

    entries.forEach((entry, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <p>${entry.text}</p>
        <small>${entry.date}</small>
        <button onclick="deleteEntry(${index})">🗑 Delete</button>
        `;
        list.appendChild(li);
    });
}

function deleteEntry(index) {
    showConfirm("Delete this journal entry?", () => {
        const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
        entries.splice(index, 1);
        localStorage.setItem("journalEntries", JSON.stringify(entries));
        displayEntries();
    });
}

displayEntries();

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