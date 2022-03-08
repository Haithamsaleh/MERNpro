const ArthersModel = require("./../../db/models/arthersSchema");
const booksModel = require("./../../db/models/booksSchema");

const addingNewarther = (req, res) => {
    const { name,age,nationality,image,gender,books  } = req.body;
    const newArthers = new ArthersModel({
        name,
        age,
        nationality,
        image,
        gender,
    });
    newArthers
      .save()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };
  const getAllArthers = (req, res) => {
    ArthersModel
      .find({isdel: false })
      .populate('image title')
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };
  const getArthers = (req, res) => {
    const { name } = req.body;
    ArthersModel
    .findOne({ name },{isdel: false }).exec()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };
  const getArthersbyid = (req, res) => {
    const { id } = req.body;
    ArthersModel
    .findById(id).exec()
        .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };
  const deletedarther = (req, res) => {
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
  const updateArthername = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    console.log(id);
    postModel
      .findByIdAndUpdate(id,{$set: { name }}, { new: true })
      .exec()
      .then((result) => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };
  const Artherbook =
  

  module.exports = {
    addingNewarther,
    getAllArthers,
    getArthers,
    getArthersbyid,
    deletedarther,
    updateArthername,
  };
  