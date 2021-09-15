var inputValue = document.getElementById("inputText");

const todoList = document.querySelector(".task-todos");
const todoCompleted = document.querySelector(".list-completed");

todoCompleted.addEventListener("click", deleteTask);
todoList.addEventListener("click", deleteTask);

function addTask() {
  var len = inputValue.length;
  var value = inputValue.value;
  let container = document.getElementById("todos");

  // first check for the value in the input
  // if it is greater than 0 then create a list element

  if (value.length > 0) {
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    container.appendChild(todoDiv);

    var listItem = document.createElement("li");
    listItem.innerHTML = inputValue.value;
    listItem.classList.add("list-item");
    const appendItems = todoDiv.appendChild(listItem);

    var delButton = document.createElement("button");
    delButton.innerHTML = '<i class="fas fa-trash"></i>';
    delButton.classList.add("delete-btn");
    todoDiv.appendChild(delButton);

    var markButton = document.createElement("button");
    markButton.innerHTML = '<i class="fas fa-check"></i>';
    markButton.id = "mark-btn";
    markButton.classList.add("check-btn");
    todoDiv.appendChild(markButton);

    // After adding the task from the input delete the content inside the input.
    deleteContent();
  } else {
    // If user inputs nothing then the function will be returned doing nothing.
    return;
  }
}

function deleteContent() {
  inputValue.value = "";
}

function deleteTask(e) {
  const item = e.target;

  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  if (item.className === "trash-btn") {
    const completed = item.parentElement;
    completed.remove();
  }
}

function checkTask(e) {
  const newItem = e.target;
  let value = undefined;

  if (newItem.classList[0] === "check-btn") {
    const element = newItem.parentElement;
    value = newItem.textContent;
    element.remove();
  }

  var checkedDiv = document.createElement("div");
  checkedDiv.classList.add("Todo");
  newContainer.appendChild(checkedDiv);

  var checklistItem = document.createElement("li");
  checklistItem.innerHTML = value;
  checklistItem.classList.add("new-list-item");
  checkedDiv.appendChild(checklistItem);

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  checkedDiv.appendChild(deleteButton);
}