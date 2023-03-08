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

    var userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML =
      "Name: " +
      user_details.Name +
      "<br>" +
      "Email: " +
      user_details.Email +
      "<br>" +
      "Contact No: " +
      user_details.Contact +
      "<hr>";

    userList.appendChild(userDiv);

    name = "";
    email = "";
    contact = "";

    userList.style.border = "1px solid #ccc";
    userList.style.padding = "10px";
    userList.style.marginTop = "20px";
  }
}
