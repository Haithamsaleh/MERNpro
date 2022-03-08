const express = require("express");
const { getAllArthers , addingNewarther, getArthersbyid,getArthers ,deletedarther,updateArthername,hdeletearther} = require("./../controllers/arthers")

const arthersRouter = express.Router()

arthersRouter.post("/addingArther", addingNewarther);
arthersRouter.get("/Arthers", getAllArthers);
//get one 
arthersRouter.get("/Arther", getArthers);
arthersRouter.get("/Arthers/:id", getArthersbyid);
arthersRouter.put("/Arthers/updatename/:id" ,updateArthername);

//soft del
arthersRouter.delete("/Arthers/delete/:id", deletedarther);
//hard del
arthersRouter.delete("/book/del/:id", hdeletearther);





module.exports = arthersRouter