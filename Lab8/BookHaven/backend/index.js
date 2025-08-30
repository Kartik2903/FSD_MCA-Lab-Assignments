const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes.js'); 

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/books', bookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Bookstore Server running on http://localhost:${PORT}`);
});
