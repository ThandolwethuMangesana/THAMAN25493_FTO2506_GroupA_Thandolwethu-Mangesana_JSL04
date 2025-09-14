import{initialTasks} from"./initialData.js"; // Import initial tasks from a separate file

function CreateinitialTaskCard(initialTasks) {
    const Card = ducument.createElement("div"); // Create a div element for the task card
    Card.className = "InitialTaskCard"; // Assign a class name for styling
    Card.textContent = initialTasks.title; // Set the text content to the task title
    Card.dataset.id = initialTasks.id; // Store the task ID in a data attribute for reference

    Card.addEventListner("click", () => openInitialTaskModal(initialTasks)); // Add a click event listener to open the task modal
    return Card; // Return the created task card element
}

function getContainerByStatus(status) {
    const column = document.querySelector('.column[data-status=${status}"]'); // Select the column based on the status
    return column.querySelector(".task-container"); // Return the task container within the selected column
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
    const modal = document.getElementById("taskModal"); // Get the modal element
    document.getElementById("task-title").value =initialTasks.title; // Set the modal title input value
    document.getElementById("task-description").value =initialTasks.description; // Set the modal description input value
    document.getElementById("task-status").value =initialTasks.status; // Set the modal status select value
    modal.dataset.id =initialTasks.id; // Store the task ID in a data attribute for reference

    modal.showModal(); // Show the modal
}