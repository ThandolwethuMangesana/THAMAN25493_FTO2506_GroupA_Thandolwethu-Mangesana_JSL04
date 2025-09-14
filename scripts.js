import{initialTasks} from"./initialData.js"; // Import initial tasks from a separate file

function CreateinitialTaskCard(initialTasks) {
    const Card = document.createElement("div"); // Create a div element for the task card
    Card.className = "InitialTaskCard"; // Assign a class name for styling
    Card.textContent = initialTasks.title; // Set the text content to the task title
    Card.dataset.id = initialTasks.id; // Store the task ID in a data attribute for reference

    Card.addEventListener("click", () => openInitialTaskModal(initialTasks)); // Add a click event listener to open the task modal
    return Card; // Return the created task card element
}

function getContainerByStatus(status) {
    const column = document.querySelector('.column[data-status=${status}"]'); // Select the column based on the status // Select the column based on the status
    return column.querySelector(".tasks-container"); // Return the task container within the selected column
}

function ClearInitialTasks() {
    document.querySelectorAll(".container").forEach(container => container.innerHTML = "");
} // Clear all task containers

function RenderInitialTasks() {
initialTasks.forEach(task => {
    const container = getContainerByStatus(task.status); // Get the appropriate container based on task status
    if (container) {
        const taskCard = CreateinitialTaskCard(task); // Create a task card for the task
        container.appendChild(taskCard); // Append the task card to the container
    }
});
}

function openInitialTaskModal(task) {
    const modal = document.getElementById("task-Modal"); // Get the modal element
    document.getElementById("task-title").value = task.title; // Set the modal title input value
    document.getElementById("task-description").value = task.description; // Set the modal description input value
   document.getElementById("task-status").value = task.status; // Set the modal status select value
    modal.dataset.id = task.id; // Store the task ID in a data attribute for reference

    modal.showModal(); // Show the modal
}

function SetupModalClose () {
    const modal = document.getElementById("task-Modal"); 
    document.getElementById("close-modal-btn") .addEventListener("click", 
        () => {
            modal.close();
        });
} // closing button

function initBoard() {
    ClearInitialTasks(); //wipes clear
    RenderInitialTasks(); // shows all tasks
    SetupModalClose(); //ensures modal closes
}

document.addEventListener("DOMContentLoaded", initBoard)