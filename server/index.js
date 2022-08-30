const express = require("express");
const priceRoute = require("./routes/price");
const mongoose = require("mongoose");
var cors = require('cors')

const uri = "mongodb+srv://selenachen:Password@cluster0.r6qaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => console.log(`Database connected successfully`));
  
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(priceRoute);

const server = app.listen(5000, () => {
    console.log("server started on port 5000");
 });
  
module.exports = server;
  