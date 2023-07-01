const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");  

const connectToMongoDB = require("./config/mongodb");

var bodyParser = require("body-parser");   

dotenv.config();

const app = express();
const port = process.env.PORT;
const mongoDbUrl = process.env.MONGODB_URL;

// CONNECT TO MONGODB DATABASE
connectToMongoDB(mongoDbUrl);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at port ${port}!`);
});