// =====================
// ELEMENT
// =====================
const inputValue = document.getElementById("inputTask");
const tanggalTask = document.getElementById("tanggalTask");
const btnTambah = document.getElementById("btnTambahTodo");
const daftartugas = document.getElementById("daftartugas");
const toggleBtn = document.getElementById("toggleMode");

// =====================
// STORAGE KEY
// =====================
const STORAGE_KEY = "todoList";

// =====================
// AMBIL DATA
// =====================
function getData(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// =====================
// SIMPAN DATA
// =====================
function saveData(data){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// =====================
// RENDER LIST
// =====================
function renderTodo(){
    daftartugas.innerHTML = "";
    const todos = getData();

    todos.forEach((todo, index) => {

        const listbaru = document.createElement("li");

        const span = document.createElement("span");
        span.innerHTML = todo.text;
        if(todo.done) span.classList.add("done");

        const tanggal = document.createElement("small");
        tanggal.innerHTML = "Tanggal: " + todo.tanggal;

        const status = document.createElement("p");
        status.innerHTML = "Status: " + (todo.done ? "Done" : "Progress");

        // EDIT
        const btnEdit = document.createElement("button");
        btnEdit.innerHTML = "✏️ Edit";
        btnEdit.classList.add("edit");

        btnEdit.addEventListener("click", function(){
            const editTask = prompt("Edit tugas:", todo.text);

            if(editTask){
                todos[index].text = editTask;
                saveData(todos);
                renderTodo();
            }
        });

        // STATUS
        const btnStatus = document.createElement("button");
        btnStatus.innerHTML = "✅ Done";
        btnStatus.classList.add("status");

        btnStatus.addEventListener("click", function(){
            todos[index].done = !todos[index].done;
            saveData(todos);
            renderTodo();
        });

        // HAPUS
        const btnHapus = document.createElement("button");
        btnHapus.innerHTML = "🗑️ Hapus";
        btnHapus.classList.add("hapus");

        btnHapus.addEventListener("click", function(){
            todos.splice(index, 1);
            saveData(todos);
            renderTodo();
        });

        listbaru.appendChild(span);
        listbaru.appendChild(tanggal);
        listbaru.appendChild(status);
        listbaru.appendChild(btnEdit);
        listbaru.appendChild(btnStatus);
        listbaru.appendChild(btnHapus);

        daftartugas.appendChild(listbaru);
    });
}

// =====================
// TAMBAH TODO
// =====================
btnTambah.addEventListener("click", function(){

    if(inputValue.value === "" || tanggalTask.value === ""){
        alert("Input dan tanggal wajib diisi!");
        return;
    }

    const todos = getData();

    todos.push({
        text: inputValue.value,
        tanggal: tanggalTask.value,
        done: false
    });

    saveData(todos);
    renderTodo();

    inputValue.value = "";
    tanggalTask.value = "";
});

// =====================
// NIGHT MODE
// =====================
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("night");
});

// =====================
// BINTANG
// =====================
const starsContainer = document.querySelector(".stars");

for(let i = 0; i < 100; i++){
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    starsContainer.appendChild(star);
}

// =====================
// SHOOTING STAR
// =====================
function createShootingStar(){
    let star = document.createElement("div");
    star.classList.add("shooting-star");

    star.style.top = Math.random() * 50 + "%";
    star.style.left = Math.random() * 50 + "%";

    starsContainer.appendChild(star);

    setTimeout(() => star.remove(), 5000);
}

setInterval(createShootingStar, 3000);

// =====================
// SERVICE WORKER (OFFLINE MODE)
// =====================
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Offline mode aktif 💙"))
        .catch(err => console.log("Gagal:", err));
    });
}

// =====================
// LOAD AWAL
// =====================
renderTodo();