const ArthersModel = require("./../../db/models/arthersSchema");

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
      .find({})
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
    .findOne({ name }).exec()
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

  module.exports = {
    addingNewarther,
    getAllArthers,
    getArthers,
    getArthersbyid
  };
  