const { Router } = require('express');
const middlewares = require('../middlewares');

const controller = require('../controllers');

const router = Router();

router.get('/', controller.getFIlms);
router.post('/', middlewares.filmvalidation, controller.createFIlm);


module.exports = router;
