const express = require('express');
const mongoose = require('mongoose');
const bodyparser =require('body-parser');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

//import routes
const postRoutes = require('./routes/posts');
//app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);

const port = 8000;
const DB_URL='mongodb+srv://danilkashalindadsd:1234@blogusa.rcd6uhn.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
    .then(() => console.log('DB connected successfully'))
    .catch((err) => console.log('DB is Not connected !!!!',err));

app.listen(port, () => {
    console.log(`app is running on ${port}`);
});

