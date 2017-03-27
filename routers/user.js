const express = require('express');
const router = express.Router();


router.get('/register',  (req, res , next) =>{
	res.send('Authenticate');
});

router.get('/authenticate',  (req, res , next) =>{
	res.send('Authenticate route');
});


router.get('/profile',  (req, res , next) =>{
	res.send('profile route');
});

module.exports = router;