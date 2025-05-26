const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize database
const db = new sqlite3.Database("./database.db");

// Create tables
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    category TEXT,
    image TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    location TEXT,
    rating INTEGER,
    text TEXT,
    date TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

// Projects API
app.get("/api/projects", (req, res) => {
  db.all("SELECT * FROM projects", (err, rows) => {
    if (err) res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post("/api/projects", (req, res) => {
  const { title, description, category, image } = req.body;
  db.run(
    "INSERT INTO projects (title, description, category, image) VALUES (?, ?, ?, ?)",
    [title, description, category, image],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Reviews API
app.get("/api/reviews", (req, res) => {
  db.all("SELECT * FROM reviews", (err, rows) => {
    if (err) res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post("/api/reviews", (req, res) => {
  const { name, location, rating, text, date } = req.body;
  db.run(
    "INSERT INTO reviews (name, location, rating, text, date) VALUES (?, ?, ?, ?, ?)",
    [name, location, rating, text, date],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
