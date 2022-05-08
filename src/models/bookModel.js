const knex = require('../../db/knex');

const findAll = async () => {
  return knex('books')
    .select('*');
};

module.exports = {
  findAll,
};
