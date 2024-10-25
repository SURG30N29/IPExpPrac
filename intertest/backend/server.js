const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/calculate-interest', (req, res) => {
    const { principal, investmentPeriod, interestRate } = req.body;
    
    // Simple interest calculation
    const interestEarned = (principal * interestRate * investmentPeriod) / 100;
    const totalAmount = principal + interestEarned; // Total amount after interest
    console.log(totalAmount)
    res.json({ interestEarned, totalAmount });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
