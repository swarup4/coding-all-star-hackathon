require('dotenv').config();

const express = require('express');
const ObjectId = require("mongoose").Types.ObjectId;

const { Review } = require('./models');

const { rejectApi, updateApiStatus, addPoint, approveApi } = require('../../middleware/submission');
const { varifyToken } = require('../../middleware/user');
const router = express.Router();


// Review 
router.get('/getAllReview/:apiId', varifyToken, (req, res) => {
	const apiId = req.params.apiId;
	Review.aggregate([
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


/* 
	Points 1 = Approve
	Points 2 = Reject
*/
router.post('/addReview', varifyToken, rejectApi, async (req, res) => {
	try {
		let body = req.body;
		let reviewData = await Review.find({ apiId: body.apiId });

		if (reviewData.length == 0) {
			let reviews = await approveApi(body)
			res.json(reviews)
		} else {
			// If One people give approveal the code
			if (reviewData[0].codeVerification == 1) {
				let reviews = await approveApi(body)

				if (reviews) {
					let obj = {
						userId: body.apiUserId,
						apiId: body.apiId,
						point: 2,
						category: "review",
					}

					let updateStatus = await updateApiStatus(body.apiId, 1)
					let point = await addPoint(obj, res)
					res.json("Point added");
				}
			} else {
				let reviews = await approveApi(body)
				if (reviews) {
					res.json("Point added After One Reject");
				}
			}
		}
	} catch (error) {
		res.send(error);
	}
});


router.post('/addPanelistReview', varifyToken, rejectApi, async (req, res) => {
	try {
		let body = req.body;
		const model = new Review(body);
		const review = await model.save();
		console.log("Success")

		const obj = { isEditable: false }
		let data = await SubmissionKey.findOneAndUpdate({ apiId: body.apiId }, obj);

		if (review) {
			return review;
		}
		// let reviewData = await Review.find({ apiId: body.apiId });

		// if (reviewData.length == 0) {
		// 	let reviews = await approveApi(body)
		// 	res.json(reviews)
		// } else {
		// 	// If One people give approveal the code
		// 	if (reviewData[0].codeVerification == 1) {
		// 		let reviews = await approveApi(body)

		// 		if (reviews) {
		// 			let obj = {
		// 				userId: body.apiUserId,
		// 				apiId: body.apiId,
		// 				point: 2,
		// 				category: "review",
		// 			}

		// 			let updateStatus = await updateApiStatus(body.apiId, 1)
		// 			let point = await addPoint(obj, res)
		// 			res.json("Point added");
		// 		}
		// 	} else {
		// 		let reviews = await approveApi(body)
		// 		if (reviews) {
		// 			res.json("Point added After One Reject");
		// 		}
		// 	}
		// }
	} catch (error) {
		res.send(error);
	}
});

router.post('/addReply/:id', varifyToken, async (req, res) => {
	try {
		const reviewId = req.params.id;
		const obj = req.body;
		obj.createdAt = new Date();
		obj.updatedAt = new Date();

		const review = await Review.findOneAndUpdate({ _id: reviewId }, { $push: { reply: obj } }, {
			new: true,
			upsert: true, // Make this update into an upsert
			returnOriginal: false
		});

		if (review) {
			res.json({
				success: true,
				data: review
			});
		}
	} catch (error) {
		res.send(error);
	}
});


module.exports = router;