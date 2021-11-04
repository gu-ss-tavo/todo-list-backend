const express = require('express');
const cors = require('cors');
const tasksRoutes = require('./routes/tasks.routes');
const middlewareError = require('./middlewares/error.middleware');

const app = express();

// ? middlewares
app.use(express.json());
app.use(cors());

// * routes
app.use(tasksRoutes);

// ! errors
app.use(middlewareError);

module.exports = app;