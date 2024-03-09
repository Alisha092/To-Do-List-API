const mongoose = require('mongoose');
const Todo = require('./models/todo');

mongoose.connect('mongodb://localhost:27017/ToDo-API', { useNewUrlParser: true, useUnifiedTopology: true }) // Update your connection string
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(err => {
        console.log("MongoDB Connection Error", err);
    });

const seedTodos = [
    { title: 'Grocery Shopping', description: 'Buy milk, bread, and eggs from the store.' },
    { title: 'Study Programming', description: 'Spend at least 2 hours on JavaScript exercises.' },
    { title: 'Exercise', description: 'Go for a 30-minute run in the park.' },
    { title: 'Read a Book', description: 'Read at least 50 pages of a novel.' },
    { title: 'Clean the House', description: 'Vacuum the living room and clean the bathrooms.' },
];

const seedDB = async () => {
    await Todo.deleteMany({});
    await Todo.insertMany(seedTodos);
    console.log("DB Seeded");
};

seedDB().then(() => {
    mongoose.connection.close();
});
