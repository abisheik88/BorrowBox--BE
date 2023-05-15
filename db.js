const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect('mongodb+srv://Abisheik:LL42NuJ0wA6y6nug@cluster0.0l6whfs.mongodb.net/carRent', { useUnifiedTopology: true, useNewurlParser: true })

    const connection = mongoose.connection

    connection.on('connected', () => {
        console.log("MongoDB connection Successful");
    })

    connection.on('error', () => {
        console.log("MongoDb Connection Error");
    })
}

connectDB();

module.exports = mongoose