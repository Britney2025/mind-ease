function saveJournal() {
    const text = document.getElementById("journal-text").value.trim();

    if (!text) return;
    const date = new Date().toLocaleString();
    const entry = {text, date};

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
    const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    entries.splice(index, 1);
    localStorage.setItem("journalEntries", JSON.stringify(entries));
    displayEntries();
}

displayEntries();

// function toggleSidebar() {
//     const sidebar = document.getElementById("sidebar");
//     sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
// }

// function closeSidebar() {
//     document.getElementById("sidebar").style.width = "0";
// }