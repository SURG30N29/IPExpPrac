import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';
import './App.css';

const API_URL = 'http://localhost:5000/contacts';

function App() {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from backend on load
  useEffect(() => {
    axios.get(API_URL)
      .then((response) => setContacts(response.data))
      .catch((error) => console.error('Error fetching contacts:', error));
  }, []);

  // Add a new contact
  const addContact = (newContact) => {
    axios.post(API_URL, newContact)
      .then(() => setContacts([...contacts, newContact]))
      .catch((error) => console.error('Error adding contact:', error));
  };

  return (
    <div className="container">
      <h1>Contacts Manager</h1>
      <AddContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
