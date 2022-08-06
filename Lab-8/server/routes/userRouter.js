const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.save); 

module.exports = router;