const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://atharvaadalvi2007_db_user:Aad6122@cluster0.oncl1yf.mongodb.net/?appName=Cluster0')
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });

module.exports = mongoose.connection;
