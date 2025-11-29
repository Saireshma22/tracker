import React from "react";
import mockData from "./data/mockData.json";
import { useLocalStorage } from "./hooks/useLocalStorage";
import EmployeeCard from "./components/EmployeeCard";
import Dashboard from "./components/Dashboard";
import FilterBar from "./components/FilterBar";
import TaskForm from "./components/TaskForm";

function App() {
  // useLocalStorage so changes persist after reload (bonus)
  const [employees, setEmployees] = useLocalStorage("employees", mockData.employees);
  const [filter, setFilter] = React.useState("All"); // All / Pending / In Progress / Completed

  // helper: add task to an employee
  const addTask = (employeeId, title, status) => {
    setEmployees(prev => prev.map(emp => {
      if (emp.id === employeeId) {
        const newTask = {
          id: Date.now(), // simple unique id
          title,
          status
        };
        return { ...emp, tasks: [...emp.tasks, newTask] };
      }
      return emp;
    }));
  };

  // helper: update task status
  const updateTaskStatus = (employeeId, taskId, newStatus) => {
    setEmployees(prev => prev.map(emp => {
      if (emp.id === employeeId) {
        return {
          ...emp,
          tasks: emp.tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t)
        };
      }
      return emp;
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
  <div className="max-w-6xl mx-auto py-8 px-4">
    {/* Header */}
    <div className="mb-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 drop-shadow-sm">
        Employee Task Tracker
      </h1>
      <p className="text-gray-600 mt-1">Manage tasks easily & efficiently</p>
    </div>

    {/* Dashboard */}
    <Dashboard employees={employees} />

    {/* Filters */}
    <FilterBar filter={filter} setFilter={setFilter} />

    {/* Body Grid */}
    <div className="grid md:grid-cols-2 gap-6">
      <TaskForm employees={employees} addTask={addTask} />
      <div className="space-y-4">
        {employees.map(emp => (
          <EmployeeCard
            key={emp.id}
            employee={emp}
            filter={filter}
            updateTaskStatus={updateTaskStatus}
          />
        ))}
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
