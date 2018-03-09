'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({

	name 			: String,
	email			: String,
	facultyID  : String,
	hashed_password	: String,
	created_at		: String,
	temp_password	: String,
	temp_password_time: String

});

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/node-login');
mongoose.connect('mongodb://<root>:<root>@ds261138.mlab.com:61138/node-login');
module.exports = mongoose.model('user', userSchema);
