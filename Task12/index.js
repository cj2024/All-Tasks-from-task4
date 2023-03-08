var btn = document.getElementById("submitButton");
var cnt = 1;

btn.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var contact = document.getElementById("phone").value;
  let user_details = {
    Name: name,
    Email: email,
    Contact: contact,
  };
  if (name == "" || email == "" || contact == "") {
    alert("Fill all fields");
  } else {
    console.log(user_details);

    var user_serialized = JSON.stringify(user_details);
    var user_key = "User" + cnt;
    localStorage.setItem(user_key, user_serialized);
    cnt++;

    var userList = document.getElementById("userList");

    var userDiv = document.createElement("li");
    userDiv.classList.add("user");
    userDiv.innerHTML =
      user_details.Name +
      " - " +
      user_details.Email +
      " - " +
      user_details.Contact;

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", deleteItem);
    function deleteItem() {
      localStorage.removeItem(user_key);
      userList.removeChild(userDiv);
    }

    // Implemented the Edit button functionality
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.addEventListener("click", editItem);
    function editItem(e) {
      localStorage.removeItem(user_key);
      userList.removeChild(userDiv);
      document.getElementById("name").value = user_details.Name;
      document.getElementById("email").value = user_details.Email;
      document.getElementById("phone").value = user_details.Contact;
    }

    userDiv.appendChild(deleteBtn);
    userDiv.appendChild(editBtn);

    var hr = document.createElement("hr");
    userDiv.appendChild(hr);

    userList.appendChild(userDiv);

    name = "";
    email = "";
    contact = "";

    userList.style.border = "1px solid #ccc";
    userList.style.padding = "10px";
    userList.style.marginTop = "20px";
  }
}
