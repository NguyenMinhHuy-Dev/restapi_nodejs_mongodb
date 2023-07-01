const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");   
const bodyParser = require("body-parser");   

// IMPORT MODULE
const authorRoute = require("./routes/authorRoute"); 
const bookRoute = require("./routes/bookRoute"); 

// CONFIG .ENV
const dotenv = require("dotenv");  
dotenv.config();

// CONNECT TO MONGODB DATABASE
const connectToMongoDB = require("./config/mongodb");
const mongoDbUrl = process.env.MONGODB_URL;
connectToMongoDB(mongoDbUrl);

// APP
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

// ROUTES
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

// RUNNING SERVER AT PORT
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at port ${port}!`);
});