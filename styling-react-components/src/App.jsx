import React from 'react'
import Notification from './components/notification'
import Button from './components/Button'

const App = () => {
  return (
    <>
      <Notification type="success">
        <p>Data saved successfully</p>
      </Notification>
      <Notification type="error">
        <p>Something went wrong</p>
      </Notification>
      <Button/>
    </>
  )
}

export default App
