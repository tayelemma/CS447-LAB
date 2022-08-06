const express = require('express');

const bookController = require('../controllers/bookController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.authenticate);

router.get('/', bookController.getAll);
router.get('/:id', bookController.getById);
router.post('/', bookController.save);
router.put('/:id', bookController.update);
router.delete('/:id', authController.authorize, bookController.deleteById);


module.exports = router;