const mongoose = require('mongoose');
const config = require('../config/database');
const bycrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
	name :{
		type: String
	},
	email:{
		type: String,
		required: true
	},
	username :{
		type :String,
		required: true
	},
	password:{
		type: String,
		required : true
	}
});  

const User = module.exports = mongoose.model("User", userSchema);

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
};

module.exports.getUserByName = function(username, callback){
	const query = {username : username};
	User.findOne(query, callback);
};

module.exports.addUser = function(newUser, callback){
	bycrypt.genSalt(10, (err, salt) => {
		bycrypt.hash(newUser.password, salt, (err, hash) => {
				if (err){
					console.log('somethig went wrong '+err);
				}else{
					newUser.password = hash;
					newUser.save(callback);
				}
					
			});
		});
	};