import React from "react";

const EditTask = ({ task }) => {
  if (!task) {
    return <div className="text-center mt-5">Loading task...</div>;
  }

  return (
    <div className="container mt-4" style={{ maxWidth: "50vw" }}>
      <h2 className="text-center mb-4">Edit Task</h2>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label text-danger">Assigned To *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Assignee"
              defaultValue={task.assignedTo}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-danger">Status *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Status"
              defaultValue={task.status}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label text-danger">Due Date *</label>
            <input
              type="date"
              className="form-control"
              defaultValue={task.dueDate}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-danger">Priority *</label>
            <select
              className="form-select"
              defaultValue={task.priority}
              required
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Optional"
            defaultValue={task.description}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => (window.location.href = "/")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => console.log("Save changes")}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
