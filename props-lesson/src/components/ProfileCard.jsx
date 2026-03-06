import React from 'react'
import ProfileInfo from './ProfileInfo'

const ProfileCard = ({ id, ...rest }) => {
  return (
    <div className='user-card'>
      <h2>User Card - {id}</h2>
      <ProfileInfo {...rest}/>
    </div>
  )
}

export default ProfileCard
