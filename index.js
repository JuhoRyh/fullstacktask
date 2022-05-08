const express = require('express');
const routes = require('./src/routes');

const app = express();
const PORT = 3001;

app.use('/api/book', routes.book);

app.get('/', (req, res) => {
  res.send('<h1>Hello world!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
