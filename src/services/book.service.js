const { Book } = require('../models');

const getAll = async () => {
  const books = Book.findAll();
  return books
};

const getById = async (id) => {
  const book = Book.findByPk(id);
  return book;
}

const create = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
};

const update = async (id, { title, author, pageQuantity }) => {
  const [updated] = await Book.update(
    {
      title,
      author,
      pageQuantity,
    },
    { where: { id } },
  );
  return updated;
};

const remove = async (id) => {
  const book = await Book.destroy(
    { where: { id } },
  );
  return book;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}