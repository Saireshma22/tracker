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
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-6">
  <h3 className="text-2xl font-semibold mb-2">Dashboard</h3>
  <p className="text-gray-500 mb-4">Overview of tasks</p>

  <div className="grid grid-cols-3 gap-4 text-center">
    <div className="p-4 bg-blue-50 rounded-xl shadow-sm">
      <div className="text-3xl font-bold text-blue-700">{total}</div>
      <p className="text-sm text-blue-600">Total Tasks</p>
    </div>
    <div className="p-4 bg-yellow-50 rounded-xl shadow-sm">
      <div className="text-3xl font-bold text-yellow-700">{counts["In Progress"]}</div>
      <p className="text-sm text-yellow-600">In Progress</p>
    </div>
    <div className="p-4 bg-green-50 rounded-xl shadow-sm">
      <div className="text-3xl font-bold text-green-700">{counts.Completed}</div>
      <p className="text-sm text-green-600">Completed</p>
    </div>
  </div>

  <div className="mt-4 bg-gray-200 h-3 rounded-full overflow-hidden">
    <div
      style={{ width: `${completedPct}%` }}
      className="h-full bg-green-500 transition-all"
    ></div>
  </div>
</div>
  );
}
export default Dashboard;
