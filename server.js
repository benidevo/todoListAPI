const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.listen(8080, () => {
    console.log('Server started on port 8080');
});