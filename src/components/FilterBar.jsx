export default function FilterBar({ filter, setFilter }) {
  const options = ["All", "Pending", "In Progress", "Completed"];
  return (
    <div className="flex gap-3 justify-center my-6">
  {options.map(opt => (
    <button
      key={opt}
      onClick={() => setFilter(opt)}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition
        ${filter === opt 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'bg-white border border-gray-300 hover:bg-gray-100'}
      `}
    >
      {opt}
    </button>
  ))}
</div>
  );
}
