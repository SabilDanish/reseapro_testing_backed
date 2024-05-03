const express = require('express');
const { addContact } = require('../controllers/contact.controller');

const router = express.Router();

router.post('/addContact', addContact)

module.exports = router