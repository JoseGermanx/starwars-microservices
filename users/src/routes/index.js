const { Router } = require('express');

const controller = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();

router.post('/', middlewares.uservalidation, controller.createUser);
router.get('/check-health', (req, res) => {
    res.send('User service is up and running');
});

router.put('/refresh-token', controller.updateToken);


module.exports = router;