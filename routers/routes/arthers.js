const express = require("express");
const { getAllArthers , addingNewarther, getArthersbyid,getArthers ,deletedarther,updateArthername} = require("./../controllers/arthers")

const arthersRouter = express.Router()

arthersRouter.post("/addingArther", addingNewarther);
arthersRouter.get("/Arthers", getAllArthers);
//get one 
arthersRouter.get("/:Arther", getArthers);
arthersRouter.get("/Arthers/:id", getArthersbyid);
postRouter.put("/Arthers/updatename/:id" ,updateArthername);

//soft del
postRouter.delete("/Arthers/delete/:id", deletedarther);





module.exports = arthersRouter