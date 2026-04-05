const UserList = () => {
  const users = [
    {id: 0, name: "Ahmed", role: "Admin"},
    {id: 1, name: "Sara", role: "User"},
    {id: 2, name: "Omer", role: "Super User"},
    {id: 3, name: "Lina", role: "User"},
    {id: 4, name: "Khalid", role: "Admin"},
  ]

  const userElements = users.map((user, index) => {
    return (
      <div key={user.id} className="card">
        <h2>#{index} - {user.name}</h2>
        <p>{user.role}</p>
      </div>
    )
  })

  // const userElements = users
  // .filter(user => user.role === "Admin")
  // .map(user => (
  //   <div className="card">
  //     <h2>{user.name}</h2>
  //     <p>{user.role}</p>
  //   </div>
  // ))

  return (
    <div>
      <h1>Users</h1>
      {userElements}
    </div>
  )
}

export default UserList
