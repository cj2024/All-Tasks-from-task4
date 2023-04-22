var btn = document.getElementById("submitButton");
var cnt = 1;
var userList = document.getElementById("userList");

axios
  .get(
    "https://crudcrud.com/api/f3476368b0ff472fb76a3fbde5b971ae/appointmentData"
  )
  .then((response) => {
    var appointments = response.data;
    for (var i = 0; i < appointments.length; i++) {
      var appointment = appointments[i];
      var userDiv = document.createElement("li");
      userDiv.classList.add("user");
      userDiv.innerHTML =
        appointment.Name +
        " - " +
        appointment.Email +
        " - " +
        appointment.Contact;

      var deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete";
      deleteBtn.addEventListener(
        "click",
        (function (appointment) {
          return function () {
            axios
              .delete(
                "https://crudcrud.com/api/f3476368b0ff472fb76a3fbde5b971ae/appointmentData/" +
                  appointment._id
              )
              .then(() => {
                userDiv.remove();
              })
              .catch((err) => console.log(err));
          };
        })(appointment)
      );

      var editBtn = document.createElement("button");
      editBtn.innerHTML = "Edit";
      editBtn.addEventListener(
        "click",
        (function (appointment) {
          return function () {
            document.getElementById("name").value = appointment.Name;
            document.getElementById("email").value = appointment.Email;
            document.getElementById("phone").value = appointment.Contact;
          };
        })(appointment)
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
        "https://crudcrud.com/api/f3476368b0ff472fb76a3fbde5b971ae/appointmentData",
        user_details
      )
      .then((response) => {
        var appointment = response.data;
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
        deleteBtn.addEventListener(
          "click",
          (function (appointment) {
            return function () {
              axios
                .delete(
                  "https://crudcrud.com/api/f3476368b0ff472fb76a3fbde5b971ae/appointmentData/" +
                    appointment._id
                )
                .then(() => {
                  userDiv.remove();
                })
                .catch((err) => console.log(err));
            };
          })(appointment)
        );

        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.addEventListener(
          "click",
          (function (appointment) {
            return function () {
              document.getElementById("name").value = appointment.Name;
              document.getElementById("email").value = appointment.Email;
              document.getElementById("phone").value = appointment.Contact;
            };
          })(appointment)
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
