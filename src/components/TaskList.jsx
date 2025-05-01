import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const TaskList = () => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [searchText, setSearchText] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Task 1",
      assignedTo: "jay",
      status: "Completed",
      dueDate: "2024-12-10",
      priority: "High",
      comments: "This task is good",
    },
    {
      id: 2,
      name: "Task 2",
      assignedTo: "harsh",
      status: "In Progress",
      dueDate: "2024-12-15",
      priority: "Low",
      comments: "Still working on it",
    },
    {
      id: 3,
      name: "Task 3",
      assignedTo: "Atul",
      status: "Not Started",
      dueDate: "2024-12-20",
      priority: "Normal",
      comments: "Not started yet",
    },
    {
      id: 4,
      name: "Task 4",
      assignedTo: "Ajay",
      status: "Completed",
      dueDate: "2024-12-25",
      priority: "High",
      comments: "This task is good",
    },
  ]);

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;

  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const handleDeleteClick = (taskId) => {
    console.log("Task to delete:", taskId); // For debugging
    setSelectedTask(taskId);
    setShowDeletePopup(true); // This should trigger the pop-up
  };

  const confirmDelete = () => {
    const updatedTasks = tasks.filter((task) => task.id !== selectedTask);
    setTasks(updatedTasks); // Update the state
    setShowDeletePopup(false); // Hide the popup
  };

  const cancelDelete = () => {
    setSelectedTask(null);
    setShowDeletePopup(false);
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "80vw" }}>
      <h2 className="text-center mb-4">Tasks</h2>

      <div className="mb-3 d-flex justify-content-between">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div>
          <button
            className="btn btn-success me-2"
            onClick={() => (window.location.href = "/new-task")}
          >
            New Task
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentTasks.map((task) => (
            <tr key={task.id}>
              <td>
                <input type="checkbox" />
              </td>

              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.comments}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() =>
                    (window.location.href = `/edit-task/${task.id}`)
                  }
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteClick(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <button
          className="btn btn-outline-primary"
          onClick={() => setCurrentPage(1)}
        >
          First
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          Prev
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            if (currentPage < Math.ceil(tasks.length / tasksPerPage)) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          Next
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => setCurrentPage(Math.ceil(tasks.length / tasksPerPage))}
        >
          Last
        </button>
      </div>

      {showDeletePopup && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="p-4 bg-white rounded text-center">
            <h5 className="text-danger">Do you want to delete this task?</h5>
            <div className="mt-3">
              <button className="btn btn-danger me-2" onClick={confirmDelete}>
                Yes
              </button>
              <button className="btn btn-secondary" onClick={cancelDelete}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
