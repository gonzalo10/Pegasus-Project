const DataLoader = require('dataloader');

const Event = require('../../models/event');
const Trip = require('../../models/trip');
const User = require('../../models/user');

const { dateToString } = require('../../helpers/date');

const eventLoader = new DataLoader(eventIds => {
	return events(eventIds);
});
const tripLoader = new DataLoader(tripIds => {
	return trips(tripIds);
});

const userLoader = new DataLoader(userIds => {
	return User.find({
		_id: {
			$in: userIds,
		},
	});
});

const events = async eventIds => {
	try {
		const events = await Event.find({
			_id: {
				$in: eventIds,
			},
		});
		events.sort((a, b) => {
			return (
				eventIds.indexOf(a._id.toString()) - eventIds.indexOf(b._id.toString())
			);
		});
		return events.map(event => {
			return transformEvent(event);
		});
	} catch (err) {
		throw err;
	}
};
const trips = async tripIds => {
	try {
		const trips = await Trip.find({
			_id: {
				$in: tripIds,
			},
		});
		trips.sort((a, b) => {
			return (
				tripIds.indexOf(a._id.toString()) - tripIds.indexOf(b._id.toString())
			);
		});
		return trips.map(trip => {
			return transformTrip(trip);
		});
	} catch (err) {
		throw err;
	}
};

const singleEvent = async eventId => {
	try {
		const event = await eventLoader.load(eventId.toString());
		return event;
	} catch (err) {
		throw err;
	}
};

const singleTrip = async tripId => {
	try {
		const trip = await tripLoader.load(tripId.toString());
		return trip;
	} catch (err) {
		throw err;
	}
};

const user = async userId => {
	try {
		const user = await userLoader.load(userId.toString());
		return {
			...user._doc,
			_id: user.id,
			createdEvents: () => eventLoader.loadMany(user._doc.createdEvents),
			savedTrips: () => tripLoader.loadMany(user._doc.savedTrips),
		};
	} catch (err) {
		throw err;
	}
};

const transformEvent = event => {
	return {
		...event._doc,
		_id: event.id,
		date: dateToString(event._doc.date),
		creator: user.bind(this, event.creator),
	};
};

const transformTrip = trip => {
	return {
		...trip._doc,
		_id: trip.id,
		creator: '5ca8f9b9b9d7b00f42c20ce3',
	};
};

const transformBooking = booking => {
	return {
		...booking._doc,
		_id: booking.id,
		user: user.bind(this, booking._doc.user),
		event: singleEvent.bind(this, booking._doc.event),
		createdAt: dateToString(booking._doc.createdAt),
		updatedAt: dateToString(booking._doc.updatedAt),
	};
};

const transformWishlist = wishlist => {
	return {
		...wishlist._doc,
		_id: wishlist.id,
		user: user.bind(this, wishlist._doc.user),
		event: singleTrip.bind(this, wishlist._doc.event),
		createdAt: dateToString(wishlist._doc.createdAt),
		updatedAt: dateToString(wishlist._doc.updatedAt),
	};
};

exports.transformEvent = transformEvent;
exports.transformTrip = transformTrip;
exports.transformBooking = transformBooking;
exports.transformWishlist = transformWishlist;

// exports.user = user;
// exports.events = events;
// exports.singleEvent = singleEvent;
