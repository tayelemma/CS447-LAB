const express = require('express');

const twitesController = require('../controllers/twitesController');
const authController = require('../controllers/authController');

const router = express.Router();


router.get('/:id', authController.authenticate, twitesController.getTweeetsIfollower);
router.post('/',authController.authenticate, twitesController.save);
router.get('/my/:id', authController.authenticate, twitesController.displayOneUserTweets);
router.post('/del/:id', authController.authenticate, twitesController.delTweet);



module.exports = router;