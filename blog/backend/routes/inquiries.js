const express = require('express');
const router = express.Router();

const inquiries = []; // Store inquiries in-memory for simplicity

router.post('/', (req, res) => {
  const { name, message } = req.body;
  inquiries.push({ name, message, date: new Date() });
  res.status(201).json({ message: 'Inquiry submitted successfully' });
});

module.exports = router;
