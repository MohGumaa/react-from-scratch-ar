import React from 'react'

const UserCard = ({ name, isOnline}) => {
  return (
    <div className='card'> 
      <h2>{name}</h2>
      <p>{ isOnline ? "🟢 Online" : "🔴 Offline" }</p>
      {isOnline ? (
        <button>Send Message</button>
      ): (
        <small>User not available</small>
      )}
    </div>
  )

}

export default UserCard
