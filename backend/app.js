const express = require('express');
const path = require('path');
const app = express();

const frontendPath = path.join(__dirname, '../frontend');

// Serve static files from the 'frontend' directory
app.use(express.static(frontendPath));

// Serve the index.html file for any route
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
