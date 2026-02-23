

const ContactForm = () => {
  return (
    <form className="form-style">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" placeholder="Enter your name"/>
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" tabIndex="1" placeholder="Enter your email"/>
    </form>
  )
}

export default ContactForm
