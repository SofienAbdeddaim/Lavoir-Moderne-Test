const express = require('express');

const test1Controller = require('../controllers/test1');

const router = express.Router();

router.post('/for', test1Controller.calculWithFor);
router.post('/foreach', test1Controller.calculWithForEach);
router.post('/while', test1Controller.calculWithWhile);
router.post('/recursion', test1Controller.calculWithRecursion);
router.post('/', test1Controller.calculWithAll);

module.exports = router;
