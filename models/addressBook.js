const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({
	name: String,
	phone: String,
	email: String,
	address: String
});

const Contact = mongoose.model('Contact', contactsSchema);

module.exports = Contact;