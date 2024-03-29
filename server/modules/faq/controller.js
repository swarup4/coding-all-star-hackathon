require('dotenv').config();

const express = require('express');
const jwt = require("jsonwebtoken");
const multer = require('multer');

var spawn = require('child_process').spawn;
var fs = require('fs');

const User = require('./models');
const userMiddleware = require('../../middleware/user');

const router = express.Router();


router.post('/compile', function (req, res) {
	
	var code = req.body.code;
	var username = req.body.username;
	
	fs.writeFile("code.c", code, function(err) {
		if(err) {
			return console.log(err);
		}
	}); 
	
	var compiler = spawn('g++', ['code.c', '-o', 'code']);

	compiler.stdout.on('data', function (data) {
		console.log('stdout: ' + data);
	});

	compiler.stderr.on('data', function (data) {
		console.log("***COMPILATION ERROR***");
		console.log(String(data));
		//res.render('index', { outputmessage: "Compile error: " + data, startingcode: req.body.code })
	});
	
	compiler.on('close', function (data) {
		
		if (data === 0) {
			
			var execute = spawn('./code', []);
			
			execute.stdout.on('data', function (output) {
				
				// get the currentlevel from their username
				con.query("SELECT currentlevel as currentlevel, starcount as starcount FROM Accounts WHERE usernames = '" + username + "';", function (err, rows, fields) {
					if (err) throw err;

					var currentLevel = rows[0].currentlevel;
					var starcount = rows[0].starcount;
					
					// get the activity that is equal to what level we are on
					con.query("SELECT * FROM Activities WHERE level = '" + currentLevel + "';", function (err, rows, fields) {
						if (err) throw err;

						var correctAnswer = rows[0].CorrectAnswer;
						var activityStars = rows[0].Stars;
						var activityName = rows[0].Title;
						var activityQuestion = rows[0].Question;

						if (output == correctAnswer) {
							res.render('home', { outputmessage: output, startingcode: req.body.code, success: true, navUsername: username, navStars: starcount, activityName: activityName, activityQuestion: activityQuestion, activityStars: activityStars });
						} else {
							res.render('home', { outputmessage: output, startingcode: req.body.code, success: false, navUsername: username, navStars: starcount, activityName: activityName, activityQuestion: activityQuestion, activityStars: activityStars });
						}

					});

				});
				
			});
			
			execute.stderr.on('data', function (output) {
				//console.log(String(output));
			});
			
			execute.on('close', function (output) {
				//console.log('stdout: ' + output);
			})
		}
	})

})

router.post('/next', function(req, res){
	
	var username = req.body.username;
	
	// get the currentlevel from their username
	con.query("SELECT currentlevel as currentlevel, starcount as starcount FROM Accounts WHERE usernames = '" + username + "';", function (err, rows, fields) {
		if (err) throw err;

		var currentLevel = rows[0].currentlevel + 1;
		var starcount = rows[0].starcount + 1;
		
		con.query("UPDATE Accounts SET currentlevel = currentlevel + 1, starcount = starcount + 1 WHERE usernames = '" + username + "';", function (err, result) {
			if (err) throw err;
		
			// get the activity that is equal to what level we are on
			con.query("SELECT * FROM Activities WHERE level = '" + currentLevel + "';", function (err, rows, fields) {
				if (err) throw err;

				var correctAnswer = rows[0].CorrectAnswer;
				var activityStars = rows[0].Stars;
				var activityName = rows[0].Title;
				var activityQuestion = rows[0].Question;
				var startingCode = rows[0].StartingCode;

				res.render('home', { outputmessage: "", startingcode: startingCode, success: false, navUsername: username, navStars: starcount, activityName: activityName, activityQuestion: activityQuestion, activityStars: activityStars });

			});

		});

	});
	
})

module.exports = router;