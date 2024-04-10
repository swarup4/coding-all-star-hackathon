require('dotenv').config();

const express = require('express');
const ObjectId = require("mongoose").Types.ObjectId;

const Models = require('./models');
const userMiddleware = require('../../middleware/user');

const router = express.Router();


// Review 
router.get('/getAllReview/:apiId', (req, res) => {
	const apiId = req.params.apiId;
	Models.Review.aggregate([
		{
			$match: {
				apiId: new ObjectId(apiId)
			}
		}, {
			$lookup: {
				from: "users",
				localField: "reviewerId",
				foreignField: "_id",
				as: "reviewer"
			}
		}, {
			$unwind: "$reviewer"
		}, {
			$unset: ["reviewer._id", "reviewer.empId", "reviewer.password", "reviewer.email", "reviewer.reporty", "reviewer.status"],
		}
	]).then(data => {
		res.json(data);
	}).catch(err => {
		res.json(err);
	});
});


router.post('/addReview', async (req, res) => {
	try {
		let obj = req.body;
		const model = new Models.Review(obj);
		const review = await model.save();
		if (review) {
			res.json(review);
		}
	} catch (error) {
		res.send(error);
	}
});

router.post('/addReply/:id', async (req, res) => {
	try {
		const reviewId = req.params.id;
		const obj = req.body;
		obj.createdAt = new Date();
		obj.updatedAt = new Date();

		const review = await Models.Review.findOneAndUpdate({ _id: reviewId }, { $push: { reply: obj } }, {
			new: true,
			upsert: true // Make this update into an upsert
		});

		if (review) {
			res.json({
				success: true,
				message: 'User has replied for the review'
			});
		}
	} catch (error) {
		res.send(error);
	}

});



module.exports = router;