const express = require('express');
const User = require('../models/user');
const config = require('../config/database');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();



router.post('/register',  (req, res) => {
	
	var user = new User({
		name: req.body.name,
		email : req.body.email,
		username : req.body.username,
		password: req.body.password
	});

	User.addUser(user, (err, usersaved) =>{
		if(err){
			res.json({success : false, msg: 'Error, Somethig when wrong adding user'});
		}
		else{
			res.json({success: true, msg: 'Success, '+usersaved.username+' added.'});
		}
	});

});

router.post('/authenticate',  (req, res , next) =>{
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByName(username , (err, user) =>{
		if(err) throw err;
		if(!user){
			return res.json({success: false, msg : 'User not found'});
		}

		//comparing password					
		User.comparedPassword(password, user.password, (err, isMatch) => {
			if(err) throw err;

			if (isMatch) {
				const token = jwt.sign(user, config.secret, {
					expiresIn : 604800 //token expiration
				});

				res.json({
					success: true,
					token: 'JWT ' + token,
					user : {
						id: user._id,
						name: user.name,
						username : user.username,
						email: user.email
					}
				});

			} else {
				return res.json({success: false, msg: 'Wrong, Password incorrent'});

			}

		});

	});
});


router.get('/profile',  passport.authenticate('jwt', {session: false}), (req, res) =>{
	res.json({user : req.user});
});

module.exports = router;