// Import required modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// Initialize the Express app
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Endpoint to get data from JSON file
app.get('/data', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read file' });
        }
        res.json(JSON.parse(data));
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

