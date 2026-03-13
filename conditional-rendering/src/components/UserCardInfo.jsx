const UserCardInfo = ({ name, isPremium, isNewUser }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      { isPremium && <p>⭐ Premium User</p> }
      { isNewUser && <p>🥳 New User</p> }
    </div>
  )
}

export default UserCardInfo
