const express = require('express');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/', userController.saveUser);
router.post('/follow', userController.saveFollower); // addFollower fetch this.
router.get('/', userController.getAllUsers); //search 

router.get('/info/:id', userController.getUserInfo);
router.post('/del/:id', userController.deleteUser);



module.exports = router;