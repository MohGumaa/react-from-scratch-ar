
const CourseCard = ({title, instructor, price, isAvailable, topics}) => {
  return (
    <div className="user-card">
      <h2>{title}</h2>
      <p>Instructor: {instructor}</p>
      <p>Price: ${price}</p>
      <p>Available: {isAvailable ? "Yes" : "No"}</p>
      <p>Topics: {topics.join(", ")}</p>
    </div>
  )
}

export default CourseCard
