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
      .find({isdel: false})
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
    .findOne({ title },{isdel: true}).exec()
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
  const updateBooktitle = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    console.log(id);
    postModel
      .findByIdAndUpdate(id,{$set: { title }}, { new: true })
      .exec()
      .then((result) => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };
  const deletebook = (req, res) => {
    const { id } = req.params;
  
    console.log(id);
    ArthersModel
      .findByIdAndUpdate(id, { isdel: true }, { new: true })
      .exec()
      .then((result) => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };

  module.exports = {
    addingNewbook,
    getAllBooks,
    getBooks,
    getbooksbyid,
    deletebook,
    updateBooktitle,
  };
  