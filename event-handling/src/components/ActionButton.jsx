
const ActionButton = ({ text, bg="bg-sky-500" }) => {
  const handleClick = (event) => {
    console.log(`You Click ${text} - ${event.target}`)
  }

  return <button 
    onClick={handleClick}
    className={`block mt-2 rouneded-md px-3.5 py-2.5 text-white font-semibold min-w-50 cursor-pointer text-xl capitalize ${bg}`}
  >
    {text}
  </button>
}

export default ActionButton
