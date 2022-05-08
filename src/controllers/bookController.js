const bookModel = require('../models/bookModel');

const getAll = async (req, res) => {
  const books = await bookModel.findAll();
  res.send(books);
};

const bookHandler = {
  getAll,
};

module.exports = bookHandler;
