const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/books.json');

// GET all books
router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
});

// GET a single book by id
router.get('/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  const book = data.find(b => b.id == req.params.id);
  res.json(book || { message: 'Book not found' });
});

// POST a new book
router.post('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  const newBook = { id: Date.now(), ...req.body };
  data.push(newBook);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json(newBook);
});

module.exports = router;
