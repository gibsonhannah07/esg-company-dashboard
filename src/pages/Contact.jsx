import { useState} from 'react'

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        category: "",
        message: "",
  });

    const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", category: "", message: "" });
  };

  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>Have companies you want added or any questions? Contact us for more information and you'll receive a response shortly!</p>
      {submitted && <p className="contact-success">Thank you! Your message has been sent and we will get back to you shortly.</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
          />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
          />
        </div>
        <div className="form-group">
          <label>Select category: </label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">-- Select a Category --</option>
            <option value="general">General question or comment</option>
            <option value="company">Company request</option>
            <option value="concern">Concern or bug</option>
          </select>
        </div>
        <div className="form-group">
          <label>Message: </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your comments and/or questions!"
            rows="5"
          />
        </div>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
}