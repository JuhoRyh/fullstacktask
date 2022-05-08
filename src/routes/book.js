const router = require('express').Router();
const bookController = require('../controllers/bookController');

router.get('/all', bookController.getAll);

module.exports = router;
