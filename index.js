const expenseAmount = document.getElementById("expense-amount");
const expenseDescription = document.getElementById("description");
const categorySelect = document.querySelector("select");
const addExpenseButton = document.querySelector("button");
const expenseList = document.getElementById("expense-list");

let expenses = [];

function renderExpenseList() {
  expenseList.innerHTML = "";
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    const li = document.createElement("li");
    li.innerHTML = `
        ${expense.description} - ${expense.amount} - ${expense.category}
        <button class="delete" data-index="${i}">Delete</button>
        <button class="edit" data-index="${i}">Edit</button>
      `;
    expenseList.appendChild(li);
    const deleteBtn = li.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
      const index = deleteBtn.getAttribute("data-index");
      expenses.splice(index, 1);
      localStorage.setItem("expenses", JSON.stringify(expenses));
      li.remove();
    });

    const editBtn = li.querySelector(".edit");
    editBtn.addEventListener("click", () => {
      const index = editBtn.getAttribute("data-index");
      expenses.splice(index, 1);
      localStorage.setItem("expenses", JSON.stringify(expenses));
      li.remove();
      expenseAmount.value = expense.amount;
      expenseDescription.value = expense.description;
      categorySelect.value = expense.category;
    });
  }
}

addExpenseButton.addEventListener("click", () => {
  const amount = expenseAmount.value;
  const description = expenseDescription.value;
  const category = categorySelect.value;
  if (amount == "" || description == "" || category == "") {
    alert("Please enter all fields");
    return;
  }
  const newExpense = { amount, description, category };
  expenses.push(newExpense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  expenseAmount.value = "";
  expenseDescription.value = "";
  categorySelect.selectedIndex = 0;
  renderExpenseList();
});
