import React from 'react'

const ProfileCardWithoutJsx = () => {
  return React.createElement(
    'div',
    { className: 'profile-card'},
    React.createElement(
      'h1',
      null,
      'Adam John'
    ),
    React.createElement(
      'p',
      null,
      'Web developer'
    ),
    React.createElement(
      'button',
      null,
      'Follow me'
    )
  )
}

export default ProfileCardWithoutJsx
