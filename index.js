const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();

const { dbConnection } = require('./db/db');
const Todo = require('./db/models/todo');


dbConnection();


const sessionConfig = {
    secret: 'itsasecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(session(sessionConfig));


app.get('/api/todos', async(req, res) => {
    try {

      } catch (error) {
        res.status(500).send(error.message);
      }
});

app.post('/api/todos', async(req, res) => {
    try {
        
    } catch (error) {
      res.status(500).send(error.message);
    }
});

app.patch('/api/todos/:id', async(req, res) => {
    try {
        
    } catch (error) {
      res.status(500).send(error.message);
    }
});

app.delete('/api/todos/:id', async(req, res) => {
    try {
        
    } catch (error) {
      res.status(500).send(error.message);
    }
});

app.get('/api/todos/:id', async(req, res) => {
    try {
        
    } catch (error) {
      res.status(500).send(error.message);
    }
});
