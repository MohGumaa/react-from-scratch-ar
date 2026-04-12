const Todo = ({ index, id, createdAt }) => {
  return (
    <div className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:border-blue-500 transition">
      <div className="w-12 text-center font-semibold">{index}</div>
      <div className="w-16 text-gray-300">{id}</div>
      <input
        className="flex-1 px-3 py-2 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter item..."
      />
      <div className="text-sm text-gray-400">
        {createdAt.toLocaleTimeString()}
      </div>
    </div>
  )
}

export default Todo
