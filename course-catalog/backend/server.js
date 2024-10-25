const express = require('express');
const cors = require('cors');
const courseRoutes = require('./routes/courses');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', courseRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
