

const Panel = ({title, children}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  )
}

export default Panel
