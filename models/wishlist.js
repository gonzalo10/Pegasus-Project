const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wishlistSchema = new Schema(
	{
		trip: {
			type: Schema.Types.ObjectId,
			ref: 'Trip',
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('WishList', wishlistSchema);
