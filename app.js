// server.js
const express = require('express');
const path = require('path');
const app = express();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
// Start the app by listening on the default
// Heroku port
app.listen(3000);
console.log("Server started on port 3000");