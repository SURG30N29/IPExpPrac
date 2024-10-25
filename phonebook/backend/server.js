const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // Parse JSON requests

const CONTACTS_FILE = './contacts.json';

// Helper to read contacts from file
const readContacts = () => {
  if (!fs.existsSync(CONTACTS_FILE)) return [];
  const data = fs.readFileSync(CONTACTS_FILE);
  return JSON.parse(data || '[]');
};

// Helper to write contacts to file
const writeContacts = (contacts) => {
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
};

// GET /contacts - Retrieve all contacts
app.get('/contacts', (req, res) => {
  const contacts = readContacts();
  res.json(contacts);
});

// POST /contacts - Add a new contact
app.post('/contacts', (req, res) => {
  const newContact = req.body;
  const contacts = readContacts();
  contacts.push(newContact);
  writeContacts(contacts);
  res.status(201).json({ message: 'Contact added successfully' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
