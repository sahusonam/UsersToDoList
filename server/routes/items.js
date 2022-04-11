const express = require('express');
const { addNewItem, getItemsList } = require('../controllers/items.js');

const router = express.Router();

router.get('/',getItemsList);

router.post('/',addNewItem);

module.exports = router;