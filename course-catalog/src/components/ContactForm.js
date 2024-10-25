import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/inquiries', formData)
      .then(response => alert(response.data.message))
      .catch(error => console.error('Error sending inquiry:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Message" onChange={handleChange} required />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
