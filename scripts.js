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