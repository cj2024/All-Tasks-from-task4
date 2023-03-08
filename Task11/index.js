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

    // Added a delete button to delete the data in the local storage as well as from the screen.
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", deleteItem);
    function deleteItem() {
      localStorage.removeItem(user_key);
      userList.removeChild(userDiv);
    }

    userDiv.appendChild(deleteBtn);

    var hr = document.createElement("hr");
    userDiv.appendChild(hr);

    userList.appendChild(userDiv);
  }
}
