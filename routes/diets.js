var express = require('express');
var router = express.Router();

const dietsController = require('../controllers/diets');

router.get('/', dietsController.index);
router.get('/new', dietsController.new);
router.post('/', dietsController.create);

router.get('/:id', dietsController.show);
router.get('/edit/:id', dietsController.edit);
router.put('/:id', dietsController.update);
router.delete('/:id', dietsController.delete);

module.exports = router;

