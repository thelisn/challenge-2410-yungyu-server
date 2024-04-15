const express = require('express');
const router = express.Router();

const list = require('../data/list.json');

router.get('/', function(req, res, next) {
    res.json(list);
});

module.exports = router;