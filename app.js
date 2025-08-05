const dotenv = require("dotenv");
const express = require("express");
const app = express();
// set up routes later


const indexRouter = require("./routes/indexRouter")
const path = require("node:path");

dotenv.config();


app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});