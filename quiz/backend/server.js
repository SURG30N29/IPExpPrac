const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is closest to the Sun?',
    options: ['Venus', 'Mercury', 'Earth', 'Mars'],
    answer: 'Mercury',
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['Shakespeare', 'Hemingway', 'Twain', 'Austen'],
    answer: 'Shakespeare',
  },
  {
    question: 'What is the square root of 64?',
    options: ['6', '8', '10', '12'],
    answer: '8',
  },
  {
    question: 'Which gas is most abundant in Earth’s atmosphere?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Helium'],
    answer: 'Nitrogen',
  },
];

app.get('/questions', (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
