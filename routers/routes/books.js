const express = require("express");
const { addingNewbook,
    getAllBooks,
    getBooks,
    getbooksbyid,
    deletebook,
    updateBooktitle,
    hdeletebook,
    updateBookpages,
    updateBookprice,
    updateBookimage,
} = require("./../controllers/books")

const booksRouter = express.Router()

booksRouter.post("/addbook", addingNewbook);
booksRouter.get("/Books", getAllBooks);
//get one 
booksRouter.get("/book", getBooks);
booksRouter.get("/book/:id", getbooksbyid);

//put
booksRouter.put("/book/updatetitle/:id" ,updateBooktitle);
booksRouter.put("/book/updateBookpages/:id" ,updateBookpages);
booksRouter.put("/book/updateBookprice/:id" ,updateBookprice);
booksRouter.put("/book/updateBookimage/:id" ,updateBookimage);

//soft del
booksRouter.delete("/book/delete/:id", deletebook);
//hard del
booksRouter.delete("/book/del/:id", hdeletebook);





module.exports = booksRouter