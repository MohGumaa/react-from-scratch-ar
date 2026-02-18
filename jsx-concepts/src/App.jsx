import Hello from "./components/Hello"
import HelloWithoutJSX from "./components/HelloWithoutJSX"
import ProfileCard from "./components/ProfileCard"
import ProfileCardWithoutJsx from "./components/ProfileCardWithoutJsx"

const App = () => {
  return (
    <div className='container'>
      {/* <Hello/> */}
      {/* <HelloWithoutJSX/> */}
      {/* <ProfileCard/> */}
      <ProfileCardWithoutJsx/>
    </div>
  )
}

export default App
