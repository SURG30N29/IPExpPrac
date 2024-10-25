const express = require('express');
const cors = require('cors');
const recipesRouter = require('./routes/recipes');

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for frontend-backend communication
app.use('/api', recipesRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
