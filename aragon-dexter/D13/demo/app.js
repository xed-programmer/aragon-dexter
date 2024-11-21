const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Express App
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
const connectToDatabase = async () => {
    const mongo_uri = process.env.MONGODB_URI;
    try {
        const connection = await mongoose.connect(mongo_uri);
        console.log('Connected to MongoDB');
        
    } catch (err) {
        console.error(err);
    }
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
    connectToDatabase();
});