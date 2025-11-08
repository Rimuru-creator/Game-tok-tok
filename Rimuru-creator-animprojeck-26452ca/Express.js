const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());

const animeData = JSON.parse(fs.readFileSync('./anime.json', 'utf8'));

app.get('/api/anime', (req, res) => {
  res.json(animeData);
});

app.get('/api/anime/:id', (req, res) => {
  const anime = animeData.find(a => a.id == req.params.id);
  if (anime) res.json(anime);
  else res.status(404).send('Anime not found');
});

app.get('/api/genre/:genre', (req, res) => {
  const result = animeData.filter(a => a.genre.includes(req.params.genre));
  res.json(result);
});

app.get('/api/search', (req, res) => {
  const q = req.query.q?.toLowerCase() || "";
  const result = animeData.filter(a => a.title.toLowerCase().includes(q));
  res.json(result);
});

app.listen(5000, () => console.log('API berjalan di port 5000'));
