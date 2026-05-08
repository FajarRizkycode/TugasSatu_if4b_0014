const inputValue = document.getElementById("inputTask");
const btnTambah = document.getElementById("btnTambahTodo");
const daftartugas = document.getElementById("daftartugas");

btnTambah.addEventListener("click", function(){

    if(inputValue.value === ""||
       tanggalTask.value === ""
    ){
        alert("Input tidak boleh kosong");
        alert("Tanggal tidak boleh kosong");
        return;
    }

    const listbaru = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = inputValue.value;

    const tanggal = document.getElementById("tanggaTask").value;
    tanggal.innerHTML = "Tanggal"+tanggal;

    listbaru.appendChild(span);
    listbaru.appendChild(tanggal);
    
    daftartugas.appendChild(listbaru);

    inputValue.value = "";
    tanggalTask.value = "";
    inputValue.focus();

    const btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";

    listbaru.appendChild("butnEdit");

    btnEdit.addEventListener("click", function(){

    const editTask = prompt(
        "Edit tugas:",
        span.innerHTML
    );

    if(
        editTask !== null &&
        editTask !== ""
    ){
        span.innerHTML = editTask;
    }

});

btnEdit.classList.add("edit");











});

