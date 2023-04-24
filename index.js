var btn = document.querySelector("#add-todo");
var todoList = document.getElementById("todo-list");
var completedList = document.getElementById("completed-todos");


axios
  .get("https://crudcrud.com/api/0f31c9d8bbed4001955e91def2aba058/todos/")
  .then(function (response) {
    response.data.forEach(function (todo) {
      var newTodo = createTodoElement(todo);
      todoList.appendChild(newTodo);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

btn.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();
  var name = document.getElementById("todo-name").value;
  var description = document.getElementById("todo-desc").value;
  if (name == "" || description == "") {
    alert("Please fill all fields correctly");
  } else {
    var todo = { name: name, description: description };
    axios
      .post(
        "https://crudcrud.com/api/0f31c9d8bbed4001955e91def2aba058/todos/",
        todo
      )
      .then(function (response) {
        var newTodo = createTodoElement(response.data);
        todoList.appendChild(newTodo);
        document.getElementById("todo-name").value = "";
        document.getElementById("todo-desc").value = "";
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

function createTodoElement(todo, isCompleted = false) {
    var newTodo = document.createElement("li");
    var todoName = document.createElement("h2");
    var todoDesc = document.createElement("p");
    todoName.innerText = todo.name;
    todoDesc.innerText = todo.description;
    newTodo.appendChild(todoName);
    newTodo.appendChild(todoDesc);
    if (!isCompleted) {
      var tickBtn = document.createElement("button");
      var crossBtn = document.createElement("button");
      tickBtn.innerText = "\u2714";
      tickBtn.style.color = "green";
      tickBtn.style.backgroundColor = "lightgreen";
      tickBtn.addEventListener("click", function () {
        var completedTodo = createTodoElement(todo, true);
        completedList.appendChild(completedTodo);
        newTodo.remove();
        axios
          .delete(
            "https://crudcrud.com/api/0f31c9d8bbed4001955e91def2aba058/todos/" +
              todo._id
          )
          .catch(function (error) {
            console.log(error);
          });
      });
      crossBtn.innerText = "\u2716";
      crossBtn.style.color = "red";
      crossBtn.style.backgroundColor = "lightcoral";
      crossBtn.addEventListener("click", function () {
        newTodo.remove();
        axios
          .delete(
            "https://crudcrud.com/api/0f31c9d8bbed4001955e91def2aba058/todos/" +
              todo._id
          )
          .catch(function (error) {
            console.log(error);
          });
      });
      newTodo.appendChild(tickBtn);
      newTodo.appendChild(crossBtn);
    }
    return newTodo;
  }
  
