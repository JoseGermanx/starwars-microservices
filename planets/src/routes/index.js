const { Router } = require('express');
const middlewares = require('../middlewares');

const controller = require('../controllers');

const router = Router();

router.get('/', controller.getPlanets);
router.post('/', middlewares.planetvalidation, controller.createPlanet);


module.exports = router;
