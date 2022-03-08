const express = require("express");
const { addingNewbook,
    getAllBooks,
    getBooks,
    getbooksbyid,
    deletebook,
    updateBooktitle,
    hdeletebook,
} = require("./../controllers/books")

const booksRouter = express.Router()

booksRouter.post("/addbook", addingNewbook);
booksRouter.get("/Books", getAllBooks);
//get one 
booksRouter.get("/book", getBooks);
booksRouter.get("/book/:id", getbooksbyid);
booksRouter.put("/book/updatetitle/:id" ,updateBooktitle);

//soft del
booksRouter.delete("/book/delete/:id", deletebook);
//hard del
booksRouter.delete("/book/del/:id", hdeletebook);





module.exports = booksRouter