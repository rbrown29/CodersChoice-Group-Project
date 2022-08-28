const express = require("express");
const router = express.Router();

const Contact = require("../models/addressBook.js");

router.get('/', (request, response) => {
    Contact.find({}, (error, foundContact) => {
        response.json(foundContact);
    });
});

router.post('/', (request, response) => {
    Contact.create(request.body, (error, createdContact) => {
        response.json(createdContact); // json will send headers
    });
});

router.delete('/:id', (request, response) => {
    Contact.findByIdAndRemove(request.params.id, (error, deletedContact) => {
        response.json(deletedContact);
    });
});

router.put('/:id', (request, response) => {
    Contact.findByIdAndUpdate(request.params.id, request.body, (error, updatedContact) => {
        response.json(updatedContact);
    });
});

module.exports = router;