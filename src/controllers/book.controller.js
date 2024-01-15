const BookService = require('../services/book.service');

const getAll = async (req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    } return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' })
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BookService.create(title, author, pageQuantity);
    return res.status(200).json(newBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updatedBook = await BookService.update(id, { title, author, pageQuantity });
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found'})
    } return res.status(201).json({ message: 'Book updated successfully'})
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await BookService.remove(id);
    return res.status(200).json({ message: 'Book deleted successfully!' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}