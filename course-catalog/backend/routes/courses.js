const express = require('express');
const router = express.Router();
const courses = require('../models/courses.json');

// GET: Retrieve all courses
router.get('/courses', (req, res) => {
  res.json(courses);
});

// POST: Handle contact form inquiries (dummy endpoint)
router.post('/inquiries', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Inquiry from ${name} - ${email}: ${message}`);
  res.status(201).json({ message: 'Inquiry received!' });
});

module.exports = router;
