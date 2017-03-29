const express = require('express');
const User = require('../models/user');
const router = express.Router();



router.post('/register',  (req, res) => {
	var user = new User({
		name: req.body.name,
		email : req.body.email,
		username : req.body.username,
		password: req.body.password
	});

	User.addUser(user, (err, usersaved)=>{
			if(err){
				res.json({success : false, msg: 'Error, Somethig when wrong adding user'});
			}
			else{
				res.json({success: true, msg: 'Success, '+usersaved.username+' added.'});
			}
	});

});

router.post('/authenticate',  (req, res , next) =>{
	res.send('Authenticate route');
});


router.get('/profile',  (req, res , next) =>{
	res.send('profile route');
});

module.exports = router;