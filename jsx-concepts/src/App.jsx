import CandidateProfile from "./components/CandidateProfile"
import ContactForm from "./components/ContactForm"
import Hello from "./components/Hello"
import HelloWithoutJSX from "./components/HelloWithoutJSX"
import ProfileCard from "./components/ProfileCard"
import ProfileCardWithoutJsx from "./components/ProfileCardWithoutJsx"
import UserProfile from "./components/UserProfile"

const App = () => {
  return (
    <div className='container'>
      {/* <Hello/> */}
      {/* <HelloWithoutJSX/> */}
      {/* <ProfileCard/> */}
      {/* <ProfileCardWithoutJsx/> */}
      <CandidateProfile/>
      <ContactForm/>
      <UserProfile/>
    </div>
  )
}

export default App
