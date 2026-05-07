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
    
    daftartugas.appendChild(listbaru);

    inputValue.value = "";
    inputValue.focus();











});

