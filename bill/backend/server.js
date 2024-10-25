// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/calculate', (req, res) => {
    const items = req.body;
    let totalCost = 0;

    items.forEach(item => {
        const quantity = parseInt(item.quantity) || 0;
        const costPerItem = parseFloat(item.cost) || 0;
        totalCost += costPerItem * quantity;
    });

    res.json({ totalCost });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
