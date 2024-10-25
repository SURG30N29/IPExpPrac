const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());  // Enable CORS for frontend communication
app.use(bodyParser.json());

app.post('/api/calculate-bmi', (req, res) => {
  const { weight, height } = req.body;

  if (!weight || !height) {
    return res.status(400).json({ error: 'Weight and height are required.' });
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  let category;

  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 24.9) category = 'Normal weight';
  else if (bmi < 29.9) category = 'Overweight';
  else category = 'Obesity';

  res.json({ bmi, category });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
