const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');


module.exports = function(passport){
	var opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
	opts.secretOrKey = config.secret;

	passport.use(new jwtStrategy(opts, (jwt_payload, done) =>{
		
		User.getUserById(jwt_payload._doc._id, (user, err) =>{
			if(err){
				done(false, err);
			}

			if(user){
				done(null, user);
				console.log(user._id);
			}else{
				done(null, false);
			}
		});

	}));

};