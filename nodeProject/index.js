const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
var cors = require("cors");
const auth=require('./middleware/auth')
app.use(cors());
const bcrypt=require('bcryptjs')
const config=require('config')
import routes from './routes';

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
routes(app);


app.listen(4005, () => {
  mongoose.connect(`mongodb://localhost:27017/aa`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`🚀 application ready at 4005`);
});