const TaskList = () => {
  const tasks = ["Learn React", "Build Project", "Deploy App"];

  return (
    <div className='bg-gray-900 scheme-dark mx-auto max-w-3xl py-12 sm:px-6 lg:px-8 rounded-xl border border-white/10 shadow'>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-white">Task Information</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-400">Task details and description.</p>
      </div>

      <dl className="divide-y divide-white/10">
        {tasks.map((task, index) => {
          return (
            <div className="px-4 py-6 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-100">{task}</dt>
            </div>
          )
        })}
      </dl>
    </div>
  )
}

export default TaskList
