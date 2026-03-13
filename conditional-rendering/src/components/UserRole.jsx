const UserRole = ({ name, role }) => {
  let roleBadge = null;

  if ( role === "admin") {
    roleBadge = <span>🔑 Admin</span>
  } else if ( role === "moderator") {
    roleBadge = <span>🛡 Moderator</span>
  } else if ( role === "vip" ) {
    roleBadge = <span>💎 VIP</span>
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      {roleBadge}
    </div>
  )
}

export default UserRole
