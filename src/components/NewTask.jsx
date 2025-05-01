import React from "react";

const NewTask = () => {
  return (
    <div className="container mt-4" style={{ maxWidth: "50vw" }}>
      <h2 className="text-center mb-4">New Task</h2>
      <form>
        {/* Assigned To and Status */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label text-danger">Assigned To *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Assignee"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-danger">Status *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Status"
              required
            />
          </div>
        </div>
        {/* Due Date and Priority */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label text-danger">Due Date *</label>
            <input type="date" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label className="form-label text-danger">Priority *</label>
            <select className="form-select" required>
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Optional"
          ></textarea>
        </div>
        {/* Buttons */}
        <div className="text-center">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => (window.location.href = "/")}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
