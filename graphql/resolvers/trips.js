const Axios = require('axios');
const Trip = require('../../models/trip');
module.exports = {
	trips: async args => {
		const results = await Axios.get(
			'http://api.travelpayouts.com/v1/city-directions?origin=BCN&currency=eur&token=269dd9a31218fab6b4e5eb7d10c41003'
		)
			.then(response => {
				const popularDestinationsInfo = response.data.data;
				const popularDestinationsList = Object.keys(popularDestinationsInfo);
				let tripList = [];
				for (let i = 0; i < popularDestinationsList.length; ++i) {
					const specificTripInfo =
						popularDestinationsInfo[popularDestinationsList[i]];
					const trip = new Trip({
						origin: specificTripInfo.origin,
						destination: specificTripInfo.destination,
						price: specificTripInfo.price,
					});
					tripList.push(trip);
				}
				return tripList;
			})
			.catch(error => {
				console.log(error);
			});
		console.log(results);
		return results;
	},
};
