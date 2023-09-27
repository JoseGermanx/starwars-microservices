const { Router } = require('express');
const { validateModel } = require('../middlewares');
const {store} = require('../database');

const router = Router();

router.get('/:model', validateModel, async (req, res) => {
    
    const { model } = req.params;
    const response = await store[model].list();
    res.status(200).send(response);
})

router.get('/:model/:id', validateModel, async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].get(id);
    res.status(200).send(response);
})

router.post('/:model', validateModel, async (req, res) => {
    const { model } = req.params;
    const response = await store[model].insert(req.body);
    res.status(201).send(response);
}
)

module.exports = router;