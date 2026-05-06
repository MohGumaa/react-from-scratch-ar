import styles from "../notification.module.css"

const Notification = ({ type ="info", children}) => {
  // let bgColor;

  // if ( type === "success" ) {
  //   bgColor = "#22c55e"
  // } else if ( type === "error" ) {
  //   bgColor = "#ef4444"
  // } else {
  //   bgColor = "#3b82f6"
  // }

  return (
    <div
      // style={{
      //   padding: "16px",
      //   borderRadius: "10px",
      //   marginBottom: "10px",
      //   color: "white",
      //   backgroundColor: bgColor
      // }}
      className={`${styles.notification} ${styles[type]}`}
    >
      {children}
    </div>
  )
}

export default Notification
