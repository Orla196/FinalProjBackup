const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('"mongodb+srv://cluster0.bslyxsp.mongodb.net/" --apiVersion 1 --username g00397035');
}

const songSchema = new mongoose.Schema({
  artist: String,
  songTitle: String,
  albumCover: String,
  duration: String,
  youtubeLink: String
});

const songModel = mongoose.model('Song', songSchema);

app.put('/api/song/:id', async (req, res) => {
  console.log("Update: " + req.params.id);

  let song = await songModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(song);
});

app.delete('/api/song/:id', async (req, res) => {
  console.log("Delete: " + req.params.id);
  let song = await songModel.findByIdAndDelete(req.params.id);
  res.send(song);
});

app.post('/api/song', (req, res) => {
  console.log(req.body);

  songModel.create({
    artist: req.body.artist,
    songTitle: req.body.songTitle,
    albumCover: req.body.albumCover,
    duration: req.body.duration,
    youtubeLink: req.body.youtubeLink
  })
    .then(() => { res.send("Song Created"); })
    .catch(() => { res.send("Song NOT Created"); });
});

app.get('/api/songs', async (req, res) => {
  let songs = await songModel.find({});
  res.json(songs);
});

app.get('/api/song/:id', async (req, res) => {
  console.log(req.params.id);

  let song = await songModel.findById(req.params.id);
  res.send(song);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
