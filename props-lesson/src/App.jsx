import CourseCard from "./components/CourseCard";
import Notification from "./components/Notification";
import Panel from "./components/Panel";
import ProfileCard from "./components/ProfileCard";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <>
      {/* <UserCard name="Ali Ahmed" job="Frontend Developer"/>
      <UserCard name="Sara Hassan" job="UI Developer"/>
      <UserCard name="Omer Khaled" job="Backend Developer" badge={<span>Top Performer</span>}/>
      <CourseCard 
        title="React for beginners" 
        instructor="Mohamed Adel"
        price={99.99}
        isAvailable={true}
        topics={["JSX", "Props", "State"]}
      />
      <CourseCard 
        title="TS" 
        instructor="Ahmed Adam"
        price={199.99}
        isAvailable={false}
        topics={["JSX", "Props", "State"]}
      /> */}
      <Notification type="success" message="Data saved successfully!"/>
      <Notification message="Warning message here!"/>
      <Notification type={undefined}/>
      <ProfileCard id={12312} username="Adam John" role="FrontEnd" active={true}/>
      <ProfileCard id={33238} username="Ali Ahmed" role="Backend" active={false}/>
      <Panel title="Dashbaord">
        <p>Total Users: 120</p>
        <p>Active Sessions: 45</p>
        <button>View Details</button>
      </Panel>
    </>
  )
}

export default App
