const knex = require('../../db/knex');

const findAll = () => (
  knex('books')
    .select('*')
    .orderBy('id')
);

const findById = (id) => (
  knex('books')
    .where('id', id)
);

const create = (body) => (
  knex('books')
    .insert(body)
);

const deleteById = (id) => (
  knex('books')
    .where('id', id)
    .del([id])
);

const updateBookById = (body, id) => (
  knex('books')
    .where('id', id)
    .update(body)
);

const bookHandler = {
  findAll,
  findById,
  create,
  deleteById,
  updateBookById,
};

module.exports = bookHandler;
