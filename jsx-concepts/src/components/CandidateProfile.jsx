const CandidateProfile = () => {
  const name = "Omer Hassan"
  const role = "Frontend Developer"
  const yearsOfExperience = 5
  const isAvailable = false

  return (
    <div className="profile-card">
      <h1>{name}</h1>
      <p>{role} wit {yearsOfExperience} years of experience</p>
      <p>Status: {isAvailable ? "Available  for hire" : "Not available "}</p>
    </div>
  )
}

export default CandidateProfile
