import React from 'react'

const ProfileInfo = ({username, role, active}) => {
  return (
    <div>
      <h3>{username}</h3>
      <p>Role: {role}</p>
      <p>Status: {active ? "Active" : "Inactive"}</p>
    </div>
  )
}

export default ProfileInfo
