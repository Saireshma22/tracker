export default function TaskList({ tasks, filter, employeeId, updateTaskStatus }) {
  const filtered = filter === "All" ? tasks : tasks.filter(t => t.status === filter);

  if (filtered.length === 0) return <p className="text-sm text-gray-500">No tasks</p>;

  return (
    <ul className="space-y-2">
      {filtered.map(t => (
        
        <li key={t.id} className="
  flex items-center justify-between 
  p-3 bg-gray-50 border rounded-xl 
  hover:bg-gray-100 transition
">
          <div>
            <div className="font-medium">{t.title}</div>
            <div className="text-xs text-gray-500">#{t.id}</div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full 
  ${t.status === 'Completed' ? 'bg-green-100 text-green-700' : 
    t.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
    'bg-red-100 text-red-700'}
`}>
  {t.status}
</span>

            
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
