var btn = document.getElementById("submitButton");
var cnt = 1;
var userList = document.getElementById("userList");

axios
  .get(
    "https://crudcrud.com/api/4693aece01094c5a8a6751614f006a9f/appointmentData"
  )
  .then((response) => {
    var appointments = response.data;
    for (var i = 0; i < appointments.length; i++) {
      var userDiv = document.createElement("li");
      userDiv.classList.add("user");
      userDiv.innerHTML =
        appointments[i].Name +
        " - " +
        appointments[i].Email +
        " - " +
        appointments[i].Contact;

      var deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete";

      var editBtn = document.createElement("button");
      editBtn.innerHTML = "Edit";
      editBtn.addEventListener(
        "click",
        (function () {
          var index = i;
          return function () {
            document.getElementById("name").value = appointments[index].Name;
            document.getElementById("email").value = appointments[index].Email;
            document.getElementById("phone").value =
              appointments[index].Contact;
          };
        })()
      );

      userDiv.appendChild(deleteBtn);
      userDiv.appendChild(editBtn);

      var hr = document.createElement("hr");
      userDiv.appendChild(hr);

      userList.appendChild(userDiv);
    }
  })
  .catch((err) => console.log(err));

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

    axios
      .post(
        "https://crudcrud.com/api/4693aece01094c5a8a6751614f006a9f/appointmentData",
        user_details
      )
      .then((response) => {
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

        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.addEventListener(
          "click",
          (function () {
            var index = i;
            return function () {
              document.getElementById("name").value = appointments[index].Name;
              document.getElementById("email").value =
                appointments[index].Email;
              document.getElementById("phone").value =
                appointments[index].Contact;
            };
          })()
        );

        userDiv.appendChild(deleteBtn);
        userDiv.appendChild(editBtn);

        var hr = document.createElement("hr");
        userDiv.appendChild(hr);

        userList.appendChild(userDiv);
      })
      .catch((err) => console.log(err));

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
}
