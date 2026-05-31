const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// GET /
app.use(express.static(path.join(__dirname, 'public')));

// GET /about
app.get('/about', (req, res) => {
  res.send('About page - my first server');
});

// GET /api/time
app.get('/api/time', (req, res) => {
  res.json({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  });
});

// GET /api/greeting?name=Sara
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.json({ greeting: `Hello, ${name}!` });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
