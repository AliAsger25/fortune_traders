let express = require("express");
require("dotenv").config();
require("./config/modelConfig");
const mainRouter = require(".");

let app = express();

app.use(express.json());
app.use("/", mainRouter);

const server = app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port number: ${process.env.PORT}`);
});

module.exports = server;