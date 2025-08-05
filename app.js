const dotenv = require('dotenv');
const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newRouter');
const path = require('node:path');

dotenv.config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up routes
app.use('/new', newMessageRouter);
app.use('/', indexRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(process.env.PORT, () => {
  console.log('Server is running on port ' + process.env.PORT);
});
