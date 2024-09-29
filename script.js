const textAreaContent = document.getElementById("todo-list-form-id");

document
  .querySelector("#todo-list-form-id")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      updateList();
    }
  });

function updateList() {
  const todoListDiv = document.getElementById("todo-list-div");

  const newLineDiv = document.createElement("div");
  newLineDiv.classList.add("todo-item");

  const paragraph = document.createElement("p");
  paragraph.id = "todo-list-content";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";
  checkbox.name = "todolist-checkbox";
  checkbox.value = "";

  checkbox.addEventListener("click", function () {
    strikethrough(checkbox, paragraph);
  });

  if (textAreaContent.value == "") {
    return;
  } else {
    paragraph.textContent = textAreaContent.value;
    textAreaContent.value = "";
  }

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "material-icons";
  deleteIcon.textContent = "delete";
  deleteIcon.style.color = "rgb(172, 40, 40)";

  deleteIcon.addEventListener("click", function (event) {
    deleteRow(event.target);
  });

  newLineDiv.appendChild(checkbox);
  newLineDiv.appendChild(paragraph);
  newLineDiv.appendChild(deleteIcon);

  todoListDiv.appendChild(newLineDiv);
}

function strikethrough(e, v) {
  if (e.checked) {
    v.style.textDecoration = "line-through";
    v.style.color = "black";
  } else {
    v.style.textDecoration = "none";
    v.style.color = "#ecf0f1";
  }
}

function deleteRow(element) {
  const row = element.parentNode;
  row.remove();
}
