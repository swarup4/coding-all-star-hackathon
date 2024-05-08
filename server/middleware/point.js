const Model = require('../modules/points/models');

const Points = {
    addPoint: async (body, res) => {
        try {
            const model = new Model.Point(body)
            let point = await model.save()
            if (point) {
                return point;
            }
        } catch (error) {
            res.json(error)
        }
    }
};

module.exports = Points;