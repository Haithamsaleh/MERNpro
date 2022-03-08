const booksModel = require("./../../db/models/booksSchema");

const addingNewbook = (req, res) => {
    const { title,pages,price,image  } = req.body;
    const newBook = new booksModel({
        title,
        pages,
        price,
        image,
    });
    newBook
      .save()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };
  const getAllBooks = (req, res) => {
    booksModel
      .find({})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };
  const getBooks = (req, res) => {
    const { title } = req.body;
    booksModel
    .findOne({ title }).exec()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };
  const getbooksbyid = (req, res) => {
    const { id } = req.body;
    booksModel
    .findById(id).exec()
        .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };

  module.exports = {
    addingNewarther,
    getAllBooks,
    getArthers,
    getArthersbyid
  };
  