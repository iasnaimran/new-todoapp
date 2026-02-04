    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Create / Add Task
    addBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");
      li.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
      taskInput.value = "";

      // Delete Task
      li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
      });

      // Edit Task
      li.querySelector(".edit").addEventListener("click", () => {
        const newText = prompt("Edit your task:", taskText);
        if (newText && newText.trim() !== "") {
          li.querySelector("span").textContent = newText.trim();
        } else {
          alert("Task cannot be empty!");
        }
      });
    });
