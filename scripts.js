// import tasks array from the other file
import { initialTasks } from "./initialData.js";

/**
 * Creates a DOM element representing a task card.
 * @param {Object} task - The task object to create a card for.
 * @param {number} task.id - Unique identifier for the task.
 * @param {string} task.title - The title of the task.
 * @param {string} task.description - The description of the task.
 * @param {string} task.status - The status of the task ("todo", "doing", "done").
 * @returns {HTMLDivElement} The created task card element.
 */

function CreateinitialTaskCard(task) {
  const Card = document.createElement("div");// Create a div element for the task card
  Card.className = "task-div"; // Assign a class name for styling
  Card.textContent = task.title; // Set the text content to the task title
  Card.dataset.id = task.id; // Store the task ID in a data attribute for reference

  Card.addEventListener("click", () => openInitialTaskModal(task)); // Add a click event listener to open the task modal
  return Card; // Return the created task card element
}

/**
 * Retrieves the container element for tasks based on their status.
 * @param {string} status - The status of the tasks ("todo", "doing", "done").
 * @returns {HTMLElement|null} The container element for the given status, or null if not found.
 */

function getContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`); // Select the column based on the status
  if (!column) return null;
  return column.querySelector(".tasks-container"); // Return the task container within the selected column
}

/**
 * Clears all tasks from every column in the board.
 * @returns {void}
 */

function ClearInitialTasks() {
  document.querySelectorAll(".tasks-container").forEach(
    (container) => (container.innerHTML = "")
  );// Clear all task containers
}
/**
 * Renders all tasks from the initialTasks array into their respective columns.
 * @returns {void}
 */
function RenderInitialTasks() {
  initialTasks.forEach((task) => {
    const container = getContainerByStatus(task.status);  // Get the appropriate container based on task status
    if (container) {
      const taskCard = CreateinitialTaskCard(task); //Create a task card for the task
      container.appendChild(taskCard);  // Append the task card to the container
    }
  });
}

/**
 * Opens the modal to view or edit a task's details.
 * @param {Object} task - The task object to display in the modal.
 * @param {number} task.id - Unique identifier for the task.
 * @param {string} task.title - The title of the task.
 * @param {string} task.description - The description of the task.
 * @param {string} task.status - The status of the task ("todo", "doing", "done").
 * @returns {void}
 */

function openInitialTaskModal(task) {
  const modal = document.getElementById("task-Modal"); // Get the modal element
  document.getElementById("task-title").value = task.title; // Set the modal title input value
  document.getElementById("task-description").value = task.description; // Set the modal description input value
  document.getElementById("task-status").value = task.status; // Set the modal status select value
  modal.dataset.id = task.id; // Store the task ID in a data attribute for reference
  modal.showModal(); // Show the modal
}

/**
 * Sets up the event listener for closing the modal.
 * @returns {void}
 */

function SetupModalClose() {
  const modal = document.getElementById("task-Modal");
  const closeBtn = document.getElementById("close-modal-btn");
  if (modal && closeBtn) {
    closeBtn.addEventListener("click", () => modal.close());
  }
}

/**
 * Initializes the Kanban board by clearing, rendering tasks, and setting up modal events.
 * @returns {void}
 */

function initBoard() {
  ClearInitialTasks(); //wipes clear
  RenderInitialTasks(); // shows all tasks
  SetupModalClose(); //ensures modal closes
}

// Initialize board when DOM is ready
document.addEventListener("DOMContentLoaded", initBoard);
