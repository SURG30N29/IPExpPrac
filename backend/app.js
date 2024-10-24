const express = require('express');
const cors = require('cors');
const articlesRouter = require('./routes/articles');
const inquiriesRouter = require('./routes/inquiries');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/articles', articlesRouter);
app.use('/inquiries', inquiriesRouter);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
