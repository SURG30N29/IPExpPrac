const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Helper function to calculate net salary
const calculateNetSalary = (basicSalary) => {
  const tax = basicSalary * 0.2;  // 20% tax
  const deductions = basicSalary * 0.1;  // 10% other deductions
  return basicSalary - (tax + deductions);
};

// API Route
app.post('/calculate', (req, res) => {
  const { basicSalary } = req.body;

  if (!basicSalary || basicSalary <= 0) {
    return res.status(400).json({ error: 'Invalid Salary Input' });
  }

  const netSalary = calculateNetSalary(basicSalary);
  res.json({ netSalary });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
