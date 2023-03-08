var btn = document.querySelector(".btn");

btn.addEventListener("click", storeItems);

function storeItems(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (name == "" || email == "") {
    alert("Enter all fields");
  } else {
    var user = {
      name: name,
      email: email,
    };

    var user_serialized = JSON.stringify(user);
    localStorage.setItem("user", user_serialized);
    var user_deserialized = JSON.parse(localStorage.getItem("user"));
    console.log(user_deserialized);
  }
}
