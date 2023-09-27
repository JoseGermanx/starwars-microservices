const { Router } = require('express');
const middlewares = require('../middlewares');

const controller = require('../controllers');

const router = Router();

router.get('/', controller.getCharacters);
router.post('/', middlewares.charactervalidation, controller.createCharacter);


module.exports = router;
