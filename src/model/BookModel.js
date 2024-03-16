const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  discription: { type: String, required: true },
  price: {type: Number, required: true }
});

const BookModel = mongoose.model("book", bookSchema);
module.exports = BookModel