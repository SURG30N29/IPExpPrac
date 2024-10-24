const express = require('express');
const router = express.Router();

const articles = [
  { id: 1, title: 'How to Choose Your Career Path', content: 'Discover your passions...' },
  { id: 2, title: 'Mastering Job Interviews', content: 'Learn how to prepare...' },
  { id: 3, title: 'Networking for Success', content: 'Build meaningful connections...' },
];

router.get('/', (req, res) => {
  res.json(articles);
});

module.exports = router;
