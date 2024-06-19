const express = require('express');

const Model = require('./models');

const router = express.Router();

router.post('/addEmailTemplate', async (req, res) => {
    try {
        let remove = await Model.deleteMany({})

        const model = await new Model(req.body)
        let template = await model.save()
        res.json(template);
    } catch (err) {
        res.send(err);
    }

});

module.exports = router;