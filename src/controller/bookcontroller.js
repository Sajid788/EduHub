const BookModel = require("../model/BookModel")

const createBook = async (data) => {
  const { title, author, discription, price } = data;
  try {
    if (!title || !author || !discription || !price) {
      throw new Error("Please fill the all feild");
    }
    const book = await BookModel.create({ title, author, discription,price });
    if(!book){
        throw new Error('Unable to create book');
    }
    return book;
  } catch (error) {
    throw error;
  }
};

const deleteBook = async (id) => {
    try {
      const deletedBook = await BookModel.findByIdAndDelete(id);
      if (!deletedBook) {
        throw new Error("Book not found");
      }
      return deletedBook;
    } catch (error) {
      throw error;
    }
  };

  const updateBook = async ( data) => {
    const { id, title, author, discription,price } = data;
    let update = {};
    if (title) update.title = title;
    if (author) update.author = author;
    if (discription) update.discription = discription;
    if (price) update.price = price
    try {
      const updatedBook = await BookModel.findByIdAndUpdate(id, update, { new: true });
      if (!updatedBook) {
        throw new Error("Book not found");
      }
      return updatedBook;
    } catch (error) {
      throw error;
    }
  };

  const getAllBooks = async () => {
    try {
      const books = await BookModel.find();
      if(!books){
        throw new Error("unale to find book")
      }
      return books;
    } catch (error) {
      throw error;
    }
  };

  const getSingleBook = async (id) => {
    try {
      const book = await BookModel.findById(id).populate("Books");
      if (!book) {
        throw new Error("Book not found");
      }
      return book;
    } catch (error) {
      throw error;
    }
  };

  module.exports = { createBook, updateBook, deleteBook, getAllBooks,getSingleBook };