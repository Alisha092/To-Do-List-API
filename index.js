const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();

const { dbConnection } = require('./db/db');

dbConnection();