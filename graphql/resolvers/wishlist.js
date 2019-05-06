const Trip = require('../../models/trip');
const wishlist = require('../../models/wishlist');
const { transformBooking, transformEvent } = require('./merge');

module.exports = {
	wishlist: async (args, req) => {
		if (!req.isAuth) {
			throw new Error('Unauthenticated!');
		}
		try {
			const bookings = await Booking.find();
			return bookings.map(booking => {
				return transformBooking(booking);
			});
		} catch (err) {
			throw err;
		}
	},
	saveTrip: async (args, req) => {
		if (!req.isAuth) {
			throw new Error('Unauthenticated!');
		}
		const fetchedEvent = await Event.findOne({
			_id: args.eventId,
		});
		const booking = new Booking({
			user: req.userId,
			event: fetchedEvent,
		});
		const result = await booking.save();
		return transformBooking(result);
	},
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
