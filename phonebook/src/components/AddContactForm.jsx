import React, { useState } from 'react';

const AddContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/; // Basic regex for 10-digit phone numbers
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(phone)) {
      setError('Phone number must be 10 digits long.');
      return;
    }

    addContact({ name, phone });
    setName('');
    setPhone('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Contact</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      {error && <div className="error">{error}</div>}
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContactForm;
