var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);

function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById("item").value;
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  // Adding a delete button
  var deleteBtn = document.createElement("btn");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  // Adding an edit button
  var editBtn = document.createElement("button");
  editBtn.className = "btn btn-sm float-right edit";
  editBtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(editBtn);
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
