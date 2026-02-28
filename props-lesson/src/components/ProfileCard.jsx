import React from 'react'
import ProfileInfo from './ProfileInfo'

const ProfileCard = ({id, ...rest}) => {
  return (
    <div className='card'>
      <h2>User ID: {id}</h2>
      <ProfileInfo {...rest}/>
    </div>
  )
}

export default ProfileCard
