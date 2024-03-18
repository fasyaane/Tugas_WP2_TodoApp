
const title = document.getElementById("title");
const description = document.getElementById("description");
const idEdit = document.getElementById("dataId");
const titleEdit = document.getElementById("titleEdit");
const descriptionEdit = document.getElementById("descriptionEdit");
const send = document.getElementById("send");
const editButton = document.getElementById("simpanEdit");
const editField = document.getElementById("editInput")
let data = [];
send.addEventListener("click", () => {
    data.push({
        title: title.value,
        description: description.value,
    })

    localStorage.setItem("title", title.value);
    localStorage.setItem("description", description.value);
    localStorage.setItem("todo", JSON.stringify(data));
    title.value = '';
    description.value = '';

    title.innerHTML = '';
    description.innerHTML = '';
    load()
    // console.log(data);
});

editButton.addEventListener("click", () => {
    console.log(`idEdit.value ${idEdit.value}`);
    const id = idEdit.value;
    data[id].title = titleEdit.value
    data[id].description = descriptionEdit.value
    load()
    batalEdit()
})
function edit(id) {
    editField.style.display = '';
    idEdit.value = id;
    titleEdit.value = data[id].title;
    descriptionEdit.value = data[id].description;
}
function hapus(id) {
    data.splice(id, 1);

    localStorage.setItem("todo", JSON.stringify(data));
    console.log(data)

    load();

}

function load() {
    var notelist = document.getElementById("noteList");
    notelist.innerHTML = "";
    data.forEach((dataItem, index) => {

        var newRow = notelist.insertRow()
        var titleCell = newRow.insertCell(0);
        titleCell.innerHTML = dataItem.title;

        var descriptionCell = newRow.insertCell(1);
        descriptionCell.innerHTML = dataItem.description;

        var actionCell = newRow.insertCell(2);
        console.log(index)
        actionCell.innerHTML = `<button class="btn btn-primary" id="edit" onclick="edit('${index}')">Edit</button> <button class="btn btn-danger" id="hapus" onclick="hapus('${index}')">Hapus</button>`;
    })
}
function batalEdit() {
    idEdit.value = '';
    titleEdit.value = '';
    descriptionEdit.value = '';

    idEdit.innerHTML = '';
    titleEdit.innerHTML = '';
    descriptionEdit.innerHTML = '';
    editField.style.display = 'none';
}


