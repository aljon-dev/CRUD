 let selectedRow = null;
function onFormSubmit() {
  
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
            resetform();
        }
        else{
            Update(formData);
         resetform();
        }
    }


function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["number"] = document.getElementById("number").value;
    formData["age"] = document.getElementById("age").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("employeelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.number;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.age;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<input type="Button" value="Edit" onClick=Edit(this) class="btn btn-warning"> 
   
    <input type="Button" value="Delete"  class="btn btn-danger Delete"> `;

}

function resetform() {

        document.getElementById("name").value ="";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("age").value = "" 
        selectedRow = null;
}       

document.querySelector("#employeelist").addEventListener("click", (e) => {
    target = e.target; 
    if(target.classList.contains("Delete")){
            target.parentElement.parentElement.remove();
            
    }
});


function Edit(td){
        selectedRow = td.parentElement.parentElement;
        document.getElementById("name").value  = selectedRow.cells[0].innerHTML;
        document.getElementById("email").value = selectedRow.cells[1].innerHTML;
        document.getElementById("number").value = selectedRow.cells[2].innerHTML;
        document.getElementById("age").value = selectedRow.cells[3].innerHTML;
}



function Update(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.number;
    selectedRow.cells[3].innerHTML = formData.age;

}



