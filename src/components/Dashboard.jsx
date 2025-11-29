function Dashboard({ employees }) {
  const allTasks = employees.flatMap(e => e.tasks);
  const total = allTasks.length;
  const completed = allTasks.filter(t => t.status === "Completed").length;
  const completedPct = total ? Math.round((completed/total)*100) : 0;
  const counts = {
    Pending: allTasks.filter(t=>t.status==='Pending').length,
    "In Progress": allTasks.filter(t=>t.status==='In Progress').length,
    Completed: completed
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Dashboard</h3>
          <p className="text-sm text-gray-500">Overview of tasks</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{total}</div>
          <div className="text-sm text-gray-500">Total Tasks</div>
        </div>
      </div>
      <div className="mt-3 flex gap-4">
        <div>Pending: {counts.Pending}</div>
        <div>In Progress: {counts["In Progress"]}</div>
        <div>Completed: {counts.Completed} ({completedPct}%)</div>
      </div>
      <div className="mt-3 bg-gray-100 h-2 rounded overflow-hidden">
        <div style={{ width: `${completedPct}%` }} className="h-full bg-green-500"></div>
      </div>
    </div>
  );
}
export default Dashboard;
