const router = require('express').Router();
const controller = require('../controllers');

router.get('/', controller.getHomePage);

module.exports = router;
