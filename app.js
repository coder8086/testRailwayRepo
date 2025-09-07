const express = require('express');
const bodyParser = require('express').json;
const { sequelize } = require('./models');
const usersRouter = require('./routes/users');
const errorHandler = require('./middleware/errorHandler');


const app = express();
app.use(bodyParser());


app.get('/', (req, res) => res.json({ message: 'Welcome to Express + Sequelize API' }));


app.use('/api/users', usersRouter);


app.use(errorHandler);


// sync database when in development (caution: don't use { force: true } in production)
if (process.env.NODE_ENV !== 'production') {
sequelize.sync()
.then(() => console.log('Database synced'))
.catch(err => console.error('Failed to sync db:', err));
}


module.exports = app;