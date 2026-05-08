const inputValue = document.getElementById("inputTask");
const tanggalTask = document.getElementById("tanggalTask");
const btnTambah = document.getElementById("btnTambahTodo");
const daftartugas = document.getElementById("daftartugas");

btnTambah.addEventListener("click", function(){

    if(
        inputValue.value === "" ||
        tanggalTask.value === ""
    ){
        alert("Input dan tanggal tidak boleh kosong");
        return;
    }

    const listbaru = document.createElement("li");

    const span = document.createElement("span");
    span.innerHTML = inputValue.value;

    const tanggal = document.createElement("small");
    tanggal.innerHTML = "Tanggal: " + tanggalTask.value;

    listbaru.appendChild(span);
    listbaru.appendChild(tanggal);

    const btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";
    btnEdit.classList.add("edit");

    listbaru.appendChild(btnEdit);

    btnEdit.addEventListener("click", function(){

        const editTask = prompt(
            "Edit tugas:",
            span.innerHTML
        );

        if(editTask !== null && editTask !== ""){
            span.innerHTML = editTask;
        }

    });

    daftartugas.appendChild(listbaru);

    inputValue.value = "";
    tanggalTask.value = "";
    inputValue.focus();

});