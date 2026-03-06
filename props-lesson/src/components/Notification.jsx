

const Notification = ({type = "info", message = "No message provided"}) => {
  return (
    <div className="card">
      <h2>Type: {type}</h2>
      <p>{message}</p>
    </div>
  )
}

export default Notification
