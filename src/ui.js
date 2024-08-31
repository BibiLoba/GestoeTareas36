//Importar la función para traer las tareas dellocalStore
import { getTasks } from "./task";

// Funcion para visualizar as taras
export const renderTasks = () => {
    const taskKList = document.getElementById("task-list");
    taskKList.innerHTML = "";
    const tasks = getTasks();
    tasks.forEach((task) => {
        const li = document.createElementment("li");
        li.setAttribute("data-id", task.id);

        if(task.completed === true) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            ${task.text}
            <button class="delete"> Borrar </button> 
            <button class="toggle"> ${task.completed === true ? "Regresar" : "Completado" } </button>
    `;

       
        taskList.appendChild(li);

    });
};
