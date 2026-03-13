import UserCard from "./components/UserCard"
import UserCardInfo from "./components/UserCardInfo"
import UserRole from "./components/UserRole"

const App = () => {
  return (
    <>
      {/* <UserCard name="Ahmed" isOnline={true} />
      <UserCard name="Sara" isOnline={false} />
      <UserCard name="Adam" isOnline={true} /> */}
      <UserCardInfo name="Ahmed" isPremium={true} isNewUser={true}/>
      <UserCardInfo name="Sara" isPremium={false} isNewUser={true}/>
      <UserRole name="Adam" role="vip"/>
      <UserRole name="Sara" role="admin"/>
    </>
  )
}

export default App
