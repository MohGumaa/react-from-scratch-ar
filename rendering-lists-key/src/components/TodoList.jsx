import { useState } from "react";
import Todo from "../components/Todo"

const TodoList = () => {
  const [counter, setCounter] = useState(1);

  const [list, setList] = useState([
    {
      id: 1,
      createdAt: new Date(),
    },
  ]);

  const addToStart = () => {
    const nextId = counter + 1;

    setList([{ id: nextId, createdAt: new Date() }, ...list]);
    setCounter(nextId);
  };

  const addToEnd = () => {
    const nextId = counter + 1;

    setList([...list, { id: nextId, createdAt: new Date() }]);
    setCounter(nextId);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-900 shadow rounded-xl border border-white/10">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>

      <div className="flex gap-3 mb-6">
        <button
          onClick={addToStart}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add To Start
        </button>

        <button
          onClick={addToEnd}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add To End
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {list.map((todo, index) => (
          <Todo key={index} index={index} {...todo} />
        ))}
      </div>
    </div>
  )
}

export default TodoList
