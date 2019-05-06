const Trip = require('../../models/trip');
const Wishlist = require('../../models/wishlist');
const { transformEvent, transformWishlist } = require('./merge');

// this is not working

module.exports = {
	wishlist: async (args, req) => {
		if (!req.isAuth) {
			throw new Error('Unauthenticated!');
		}
		try {
			const wishlist = await Wishlist.find();
			return wishlist.map(wishlist => {
				return transformWishlist(wishlist);
			});
		} catch (err) {
			throw err;
		}
	},
	// saveTrip: async (args, req) => {
	// 	if (!req.isAuth) {
	// 		throw new Error('Unauthenticated!');
	// 	}
	// 	const fetchedTrip = await Trip.findOne({
	// 		_id: args.tripId,
	// 	});
	// 	const wishlist = new Wishlist({
	// 		user: req.userId,
	// 		trip: fetchedTrip,
	// 	});
	// 	const result = await wishlist.save();
	// 	return transformWishlist(result);
	// },
	cancelTrip: async (args, req) => {
		if (!req.isAuth) {
			throw new Error('Unauthenticated!');
		}
		try {
			const booking = await Booking.findById(args.bookingId).populate('event');
			const event = transformEvent(booking.event);
			await Booking.deleteOne({
				_id: args.bookingId,
			});
			return event;
		} catch (err) {
			throw err;
		}
	},
};
