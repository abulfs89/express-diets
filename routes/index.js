var express = require('express');
var router = express.Router();

const dietsController = require('../controllers/diets');

router.get('/', dietsController.index);

module.exports = router;
