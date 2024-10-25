import React from 'react';
import '../Card.css'; // Import the card CSS if in a separate file

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <div>
        {contacts.map((contact, index) => (
          <div className="card" key={index}>
            <div className="card-header">{contact.name}</div>
            <div className="card-body">Phone: {contact.phone}</div>
            <button className="card-button">Edit</button>
            <button className="card-button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
