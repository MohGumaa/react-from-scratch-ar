import ClassGreeting from './components/ClassGreeting'
import FunctionGreeting from './components/FunctionGreeting'

const App = () => {
  return (
    <div className='container'>
      <h1>📘 الدرس: الفرق بين Function Component و Class Component</h1>
      <FunctionGreeting />
      <ClassGreeting />
    </div>
  )
}

export default App
