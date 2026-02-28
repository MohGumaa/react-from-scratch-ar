
const UserCard = ({name, job, badge}) => {

  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{job}</p>
      {badge}
    </div>
  )
}

export default UserCard
