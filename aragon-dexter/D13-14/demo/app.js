const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');

require('dotenv').config();

// Express App
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

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

// Routes
app.use('/todos', todoRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
    connectToDatabase();
});