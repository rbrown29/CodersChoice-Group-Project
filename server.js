const express = require("express");
const mongoose = require("mongoose");
const app = express();
const contactController = require("./controllers/addressBook.js");

app.use(express.json());
app.use(express.static('public'));
app.use('/contactsapi', contactController);
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.once('open', () => {
	console.log('connected to mongoose ......')
});

app.listen(process.env.PORT, () => {
	console.log('listening')
});
