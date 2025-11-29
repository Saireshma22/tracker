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
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Task Tracker</h1>
      <Dashboard employees={employees} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <TaskForm employees={employees} addTask={addTask} />
          <div className="mt-4 space-y-3">
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
        {/* Right column could show expanded dashboard or analytics */}
        <div>
          {/* Optional extra components */}
        </div>
      </div>
    </div>
  );
}

export default App;
