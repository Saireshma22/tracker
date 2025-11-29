export default function FilterBar({ filter, setFilter }) {
  const options = ["All", "Pending", "In Progress", "Completed"];
  return (
    <div className="flex gap-2 items-center my-4">
      {options.map(opt => (
        <button key={opt} onClick={() => setFilter(opt)}
          className={`px-3 py-1 rounded ${filter===opt ? 'bg-blue-600 text-white' : 'bg-white border'}`}>
          {opt}
        </button>
      ))}
    </div>
  );
}
