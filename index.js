const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
