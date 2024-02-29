const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/url-shortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));

// Create URL Schema
const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortUrl: String
});
const Url = mongoose.model('Url', urlSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// Route to shorten a URL
app.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = shortid.generate();
  const newUrl = new Url({
    originalUrl,
    shortUrl
  });
  await newUrl.save();
  res.json(newUrl);
});

// Route to redirect to original URL
app.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;
  const url = await Url.findOne({ shortUrl });
  if (url) {
    return res.redirect(url.originalUrl);
  } else {
    return res.status(404).json({ error: 'URL not found' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
