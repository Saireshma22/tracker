import React, { useState } from "react";

export default function TaskForm({ employees, addTask }) {
  const [employeeId, setEmployeeId] = useState(employees[0]?.id || "");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");
  const [error, setError] = useState("");  

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Please enter a task title");
      return;
    }

    setError("");
    addTask(Number(employeeId), title.trim(), status);
    setTitle("");
    setStatus("Pending");
  };

  return (
    <form onSubmit={onSubmit} className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-2">Add New Task</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <select 
          value={employeeId} 
          onChange={(e) => setEmployeeId(e.target.value)} 
          className="p-2 border rounded"
        >
          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.name}
            </option>
          ))}
        </select>

        <div className="flex flex-col">
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");  
            }}
            placeholder="Task title"
            className={`p-2 border rounded ${error ? "border-red-500" : ""}`}
          />
          {error && (
            <span className="text-red-600 text-sm mt-1">{error}</span>
          )}
        </div>

        <select 
          value={status} 
          onChange={(e) => setStatus(e.target.value)} 
          className="p-2 border rounded"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="mt-3">
        <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-md transition">
          Add Task
        </button>
      </div>
    </form>
  );
}
