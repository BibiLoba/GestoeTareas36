let tasks= JSON.parse(localStorage.getItem("task")) || [];

// Funcion para llevar las tareas 
export const getTasks = () => tasks; 

// Función para agregar una tarea 
export const addTask = (task) => {
const newTask = { 
    id: Date.now(),
    text: task,
    completed: false,
};
tasks.push(neTask);
localStorage.setItem("tasks", JSON.strigify(tasks));
};  