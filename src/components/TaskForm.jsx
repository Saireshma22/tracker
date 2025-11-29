import React, { useState } from "react";

export default function TaskForm({ employees, addTask }) {
  const [employeeId, setEmployeeId] = useState(employees[0]?.id || "");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Enter task title");
    addTask(Number(employeeId), title.trim(), status);
    setTitle("");
    setStatus("Pending");
  };

  return (
    <form onSubmit={onSubmit} className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-2">Add New Task</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <select value={employeeId} onChange={e=>setEmployeeId(e.target.value)} className="p-2 border rounded">
          {employees.map(emp => <option key={emp.id} value={emp.id}>{emp.name}</option>)}
        </select>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Task title" className="p-2 border rounded" />
        <select value={status} onChange={e=>setStatus(e.target.value)} className="p-2 border rounded">
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>
      <div className="mt-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Add Task</button>
      </div>
    </form>
  );
}
