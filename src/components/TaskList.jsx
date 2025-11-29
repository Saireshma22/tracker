export default function TaskList({ tasks, filter, employeeId, updateTaskStatus }) {
  const filtered = filter === "All" ? tasks : tasks.filter(t => t.status === filter);

  if (filtered.length === 0) return <p className="text-sm text-gray-500">No tasks</p>;

  return (
    <ul className="space-y-2">
      {filtered.map(t => (
        <li key={t.id} className="flex items-center justify-between p-2 border rounded">
          <div>
            <div className="font-medium">{t.title}</div>
            <div className="text-xs text-gray-500">#{t.id}</div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded text-xs ${t.status === 'Completed' ? 'bg-green-100' : t.status === 'In Progress' ? 'bg-yellow-100' : 'bg-red-100'}`}>{t.status}</span>
            <select
              value={t.status}
              onChange={(e) => updateTaskStatus(employeeId, t.id, e.target.value)}
              className="text-sm"
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </li>
      ))}
    </ul>
  );
}
