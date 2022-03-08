const express = require("express");
const {
  getAllArthers,
  addingNewarther,
  getArthersbyid,
  getArthers,
  deletedarther,
  updateArthername,
  hdeletearther,
  updateArtherAge,
  updateArtherImage,
} = require("./../controllers/arthers");

const arthersRouter = express.Router();

arthersRouter.post("/addingArther", addingNewarther);
arthersRouter.get("/Arthers", getAllArthers);
//get one
arthersRouter.get("/Arther", getArthers);
arthersRouter.get("/Arthers/:id", getArthersbyid);

//put 
arthersRouter.put("/Arthers/updatename/:id", updateArthername);
arthersRouter.put("/Arthers/updateArtherAge/:id", updateArtherAge);
arthersRouter.put("/Arthers/updateArtherImage/:id", updateArtherImage);


//soft del
arthersRouter.delete("/Arthers/delete/:id", deletedarther);
//hard del
arthersRouter.delete("/book/del/:id", hdeletearther);

module.exports = arthersRouter;
