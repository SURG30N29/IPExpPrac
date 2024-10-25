const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors')




const movies = [
  { id: 1, title: 'Inception', year: 2010, genre: 'Sci-Fi', description: 'A thief who steals corporate secrets through dream-sharing technology is given a task of planting an idea in the mind of a CEO.' },
  { id: 2, title: 'The Dark Knight', year: 2008, genre: 'Action', description: 'Batman must accept his greatest psychological and physical challenges to fight injustice.' },
  { id: 3, title: 'Interstellar', year: 2014, genre: 'Sci-Fi', description: 'A team of explorers travel through a wormhole in space to ensure humanity’s survival.' },
];

app.use(cors())

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
