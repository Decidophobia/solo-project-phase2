const router = require('express').Router();
const controller = require('../controllers');

router.get('/', controller.getHomePage);
router.get('/cyberpunk', controller.getCyberpunkNews)
router.get('/vampire', controller.getVampireNews)
router.get('/dyinglight2', controller.getDyinglight2News)

module.exports = router;
