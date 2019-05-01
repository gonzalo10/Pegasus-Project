const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripSchema = new Schema({
	origin: {
		type: String,
		required: true,
	},
	destination: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('Trip', tripSchema);
