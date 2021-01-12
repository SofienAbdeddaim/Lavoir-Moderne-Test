const express = require('express');

const test3Controller = require('../controllers/test3');

const router = express.Router();

router.post('/', test3Controller.calculateHigherPath);

module.exports = router;
