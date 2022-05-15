const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const routes = require('./src/routes');

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, './client/build')));

app.use('/api/book', routes.book);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.sendStatus(status);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
