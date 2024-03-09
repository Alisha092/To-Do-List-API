const mongoose = require('mongoose');

function dbConnection() {
    mongoose.connect('mongodb://localhost:27017/ToDo-API');
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", () => console.log("Database connected"));
}

module.exports = { dbConnection }