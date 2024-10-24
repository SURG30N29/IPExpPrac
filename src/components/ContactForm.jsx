import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message }),
    });
    alert('Inquiry submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
