import ActionButton from "./components/ActionButton"
import InputFiled from "./components/InputFiled"

const App = () => {
  return (
    <>
      <ActionButton text="save"/>
      <ActionButton text="delete" bg="bg-red-400"/>
      <ActionButton text="download" bg="bg-gray-900"/>
      <InputFiled/>
    </>
  )
}

export default App
