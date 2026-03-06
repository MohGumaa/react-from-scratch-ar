import React from 'react'

const Panel = ({title, children}) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default Panel
