import React from "react";
import TaskList from "./TaskList";

export default function EmployeeCard({ employee, filter, updateTaskStatus }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="font-semibold">{employee.name}</h2>
          <p className="text-sm text-gray-500">{employee.role}</p>
        </div>
        <div className="text-xs text-gray-400">Tasks: {employee.tasks.length}</div>
      </div>
      <TaskList tasks={employee.tasks} filter={filter} employeeId={employee.id} updateTaskStatus={updateTaskStatus}/>
    </div>
  );
}
