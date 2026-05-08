const inputValue = document.getElementById("inputTask");
const tanggalTask = document.getElementById("tanggalTask");
const btnTambah = document.getElementById("btnTambahTodo");
const daftartugas = document.getElementById("daftartugas");

btnTambah.addEventListener("click", function(){

    if(
        inputValue.value === "" ){
        alert("Input dan tanggal tidak boleh kosong");
        return;
    }

    if(tanggalTask.value===""){
        alert("Tanggal tidak boleh kosong")
        return;
    }



    const listbaru = document.createElement("li");

    const span = document.createElement("span");
    span.innerHTML = inputValue.value;

    const tanggal = document.createElement("small");
    tanggal.innerHTML = "Tanggal: " + tanggalTask.value;

    const status = document.createElement("p")
    status.innerHTML = "Status: Progress";

    const btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";
    btnEdit.classList.add("edit");

  

    btnEdit.addEventListener("click", function(){

        const editTask = prompt(
            "Edit tugas:",
            span.innerHTML
        );

        if(editTask !== null && editTask !== ""){
            span.innerHTML = editTask;
        }

    });

    const btnStatus = document.createElement("button");
    btnStatus.innerHTML = "Done";
    btnStatus.classList.add("status");

    btnStatus.addEventListener("click", function(){

        if(status.innerHTML === "Status: Progress"){
            status.innerHTML = "Status: Done";
            span.classList.add("done");
        } else {
            status.innerHTML = "Status: Progress";
            span.classList.remove("done");
        }

    });


    daftartugas.appendChild(listbaru);
    
    listbaru.appendChild(span);
    listbaru.appendChild(tanggal);
    listbaru.appendChild(btnEdit);


    inputValue.value = "";
    tanggalTask.value = "";
    inputValue.focus();

});

