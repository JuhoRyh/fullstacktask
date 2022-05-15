const router = require('express').Router();
const bookController = require('../controllers/bookController');

router.get('/all', async (req, res) => {
  const books = await bookController.findAll();
  res.send(books);
});

router.get('/:id', async (req, res, next) => {
  try {
    const book = await bookController.findById(req.params.id);
    if (book.length > 0) {
      res.send(book);
    } else {
      next();
    }
  } catch (err) {
    next();
  }
});

router.delete('/:id', async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  try {
    await bookController.deleteById(id);
    res.sendStatus(200);
  } catch (err) {
    next();
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newBook = await bookController.create(req.body);
    res.send(newBook);
  } catch (err) {
    next();
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    await bookController.updateBookById(req.body, req.params.id);
    res.sendStatus(200);
  } catch (err) {
    next();
  }
});

module.exports = router;
