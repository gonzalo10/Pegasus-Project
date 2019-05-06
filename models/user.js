const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdEvents: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Event',
		},
	],
	savedTrips: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Trip',
		},
	],
});

module.exports = mongoose.model('User', userSchema);
