import React, { useState } from 'react';
import './CSS/Contact.css'
const Contact = () => {
  const [formData, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  function handleName(event) {
    setData((n) => ({ ...n, name: event.target.value }));
  }

  function handleEmail(event) {
    setData((n) => ({ ...n, email: event.target.value }));
  }

  function handleSubject(event) {
    setData((n) => ({ ...n, subject: event.target.value }));
  }

  function handleMessage(event) {
    setData((n) => ({ ...n, message: event.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:');
    alert('Thank you! your message has been submitted');
    setData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <h3>Name:</h3>
        <input
          type="text"
          name="name"
          onChange={handleName}
          value={formData.name}
          placeholder="Your Name"
          className="contact-input"
        />
        <h3>Email:</h3>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleEmail}
          placeholder="Your Email"
          className="contact-input"
        />
        <h3>Subject:</h3>
        <input
          type="text"
          name="subject"
          onChange={handleSubject}
          value={formData.subject}
          placeholder="Subject"
          className="contact-input"
          required
        />
        <h3>Message:</h3>
        <textarea
          name="message"
          onChange={handleMessage}
          value={formData.message}
          placeholder="Your Message"
          rows="5"
          className="contact-textarea"
        />
        <br />
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
      
    </div>
    
  );
};

export default Contact;
