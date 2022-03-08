const express = require("express");
const { addingNewbook,
    getAllBooks,
    getBooks,
    getbooksbyid,
    deletebook,
    updateBooktitle,} = require("./../controllers/books")

const booksRouter = express.Router()

booksRouter.post("/addingArther", addingNewbook);
booksRouter.get("/Arthers", getAllBooks);
//get one 
booksRouter.get("/:Arther", getBooks);
booksRouter.get("/Arthers/:id", getbooksbyid);
booksRouter.put("/Arthers/updatename/:id" ,updateBooktitle);

//soft del
booksRouter.delete("/Arthers/delete/:id", deletebook);





module.exports = booksRouter