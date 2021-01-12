const express = require('express');

const test2Controller = require('../controllers/test2');

const router = express.Router();

router.post('/', test2Controller.joinListsAlternatingly);

module.exports = router;
