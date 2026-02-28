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
      <Notification type="Success" message="Data saved successfully!"/>
      <Notification type={undefined} message="Warning message here!"/>
      <Notification/>
      <ProfileCard id="212" username="Ali Ahmed" role="Fullstack Developer" active={true}/>
      <ProfileCard id="245" username="Sarah Ali" role="UI Developer" active={false}/>
      <Panel title="Dashboard">
        <p>Total Users: 120</p>
        <p>Active Sessions: 45</p>
        <button>View Details</button>
      </Panel>
      <Panel title="Pending">
        <p>Pending Users: 21</p>
      </Panel>
    </>
  )
}

export default App
