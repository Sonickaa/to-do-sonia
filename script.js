const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");

const textElement = document.getElementById("text");

addTaskBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearAllTasks);

function addTask() {
  const taskText = taskInput.value;
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
      <input type="checkbox">
      <span class="taskText">${taskText}</span>
      <button class="removeBtn">Remove</button>
      <button class="editBtn">Edit</button>  
      <input type="text" class="editInput" style="display: none;">
    `;

  taskList.appendChild(taskItem);
  taskInput.value = "";

  const removeBtn = taskItem.querySelector(".removeBtn");
  removeBtn.addEventListener("click", function () {
    taskItem.remove();
  });

  // EDIT btn (created in addTask()) and actual editing + "blur" event which is like OK when clicked out of edit input, after edititng is finished
  const editBtn = taskItem.querySelector(".editBtn");
  const taskTextElement = taskItem.querySelector(".taskText");
  const editInput = taskItem.querySelector(".editInput");

  editBtn.addEventListener("click", function () {
    taskTextElement.style.display = "none";
    editInput.style.display = "inline";
    editInput.value = taskTextElement.textContent;
    editInput.focus();
  });

  editInput.addEventListener("blur", function () {
    taskTextElement.style.display = "inline";
    editInput.style.display = "none";
    taskTextElement.textContent = editInput.value;
  });

  // end of edit section

  const checkbox = taskItem.querySelector("input[type='checkbox']");
  checkbox.addEventListener("change", function () {
    taskItem.classList.toggle("completed");
  });
}

function clearAllTasks() {
  taskList.innerHTML = "";
}
