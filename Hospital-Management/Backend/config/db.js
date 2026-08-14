const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://atharvaadalvi2007_db_user:mE4TMkVmkKSBjzJO@cluster0.oncl1yf.mongodb.net/?appName=Cluster0')
const db = mongoose.connection;
db.on("connected",()=>{
    console.log("MongoDB connected successfully");
});
db.on("disconnected",()=>{
    console.log("MongoDB disconnected");
});
db.on("error",(err)=>{
    console.log("MongoDB connection error:", err);
});
module.exports = db;

