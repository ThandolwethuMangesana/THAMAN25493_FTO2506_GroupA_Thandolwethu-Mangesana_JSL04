// import tasks array from the other file
import { initialTasks } from "./initialData.js";

function CreateinitialTaskCard(task) {
  const Card = document.createElement("div");// Create a div element for the task card
  Card.className = "task-div"; // Assign a class name for styling
  Card.textContent = task.title; // Set the text content to the task title
  Card.dataset.id = task.id; // Store the task ID in a data attribute for reference

  Card.addEventListener("click", () => openInitialTaskModal(task)); // Add a click event listener to open the task modal
  return Card; // Return the created task card element
}

function getContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`); // Select the column based on the status
  if (!column) return null;
  return column.querySelector(".tasks-container"); // Return the task container within the selected column
}

function ClearInitialTasks() {
  document.querySelectorAll(".tasks-container").forEach(
    (container) => (container.innerHTML = "")
  );// Clear all task containers
}

function RenderInitialTasks() {
  initialTasks.forEach((task) => {
    const container = getContainerByStatus(task.status);  // Get the appropriate container based on task status
    if (container) {
      const taskCard = CreateinitialTaskCard(task); //Create a task card for the task
      container.appendChild(taskCard);  // Append the task card to the container
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

function SetupModalClose() {
  const modal = document.getElementById("task-Modal");
  const closeBtn = document.getElementById("close-modal-btn");
  if (modal && closeBtn) {
    closeBtn.addEventListener("click", () => modal.close());
  }
}

function initBoard() {
  ClearInitialTasks(); //wipes clear
  RenderInitialTasks(); // shows all tasks
  SetupModalClose(); //ensures modal closes
}

document.addEventListener("DOMContentLoaded", initBoard);
