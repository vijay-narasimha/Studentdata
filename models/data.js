const mongoose = require("mongoose");
const validator = require("validator");

const dataSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name must be added"],
	},
	course: {
		type: String,
		required: [true, "course must be added"],
	},
	age: {
		type: Number,
		required: [true, "Age must be number"],
	},
	email: {
		type: String,
		required: [true, "Please provide your email"],

		validate: [validator.isEmail, "please provide valid email"],
	},
});

const data = mongoose.model("data", dataSchema);
module.exports = data;
