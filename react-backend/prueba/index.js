import {
  onGetTasks,
  saveTask,
  deleteTask,
  getTask,
  updateTask,
  getTasks,
} from "./firebase.js";

const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");

let editStatus = false;
let id = "";
//const fs = require('fs');

window.addEventListener("DOMContentLoaded", async (e) => {
  // const querySnapshot = await getTasks();
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });

  onGetTasks((querySnapshot) => {
    tasksContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task = doc.data();

     console.table(task);

      tasksContainer.innerHTML += `
      <div class="card card-body mt-2 border-primary">
    <h3 class="h5">${task.nombre}</h3>
    <p>${task.description}</p>
    <div>
      <button class="btn btn-primary btn-delete" data-id="${doc.id}">
        🗑 Delete 
      </button>
      <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
        🖉 Edit
      </button>
    </div>
  </div>`;
    });

    const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
          await deleteTask(dataset.id);
        } catch (error) {
          console.log(error);
        }
      })
    );

    const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        try {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();
          taskForm["task-nombre"].value = task.nombre;
          taskForm["task-description"].value = task.description;
          taskForm["task-amount"].value = task.amount;
          taskForm["task-imageURL"].value = task.imageURL;

          editStatus = true;
          id = doc.id;
          taskForm["btn-task-form"].innerText = "Update";

          onGetTasks((querySnapshot) => {
            let platillosNuevos = JSON.stringify(querySnapshot);
            
            writeFile('./menu.json', platillosNuevos, (error) =>{
            if(error){
                console.log(`Error: ${error}`);
            }else{
                console.log("Archivo modificado correctamente.")
            }
          })
        })

        } catch (error) {
          console.log(error);
        }
      });
    });
  });
});

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = taskForm["task-nombre"];
  const description = taskForm["task-description"];
  const amount = taskForm["task-amount"];
  const imageURL = taskForm["task-imageURL"];

  try {
    if (!editStatus) {
      await saveTask(nombre.value, description.value,  amount.value, imageURL.value);
    } else {
      await updateTask(id, {
        nombre: nombre.value,
        description: description.value,
        amount: amount.value,
        imageURL: imageURL.value,
      });

      editStatus = false;
      id = "";
      taskForm["btn-task-form"].innerText = "Save";
    }

    taskForm.reset();
    title.focus();
  } catch (error) {
    console.log(error);
  }
});

