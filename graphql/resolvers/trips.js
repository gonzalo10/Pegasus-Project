const Axios = require('axios');
const Trip = require('../../models/trip');
//const citiesCodes = require('../../citiesInfo');
var citiesCodes = require('../../citiesInfo');
const token = '269dd9a31218fab6b4e5eb7d10c41003';
module.exports = {
	trips: async args => {
		const cities_ITA_Code = await Axios.get(
			'http://api.travelpayouts.com/data/en/cities.json'
		)
			.then(result => {
				const cities_info = {};
				const cities_data = result.data;
				for (let i = 0; i < Object.keys(cities_data).length; ++i) {
					cities_info[cities_data[i].code] = cities_data[i];
				}
				return cities_info;
			})
			.catch(err => {
				console.log(err);
			});
		const results = await Axios.get(
			`http://api.travelpayouts.com/v1/city-directions?origin=BCN&currency=eur&token=${token}`
		)
			.then(response => {
				const popularDestinationsInfo = response.data.data;
				const popularDestinationsList = Object.keys(popularDestinationsInfo);
				let tripList = [];
				for (let i = 0; i < popularDestinationsList.length; ++i) {
					const specificTripInfo =
						popularDestinationsInfo[popularDestinationsList[i]];
					console.log(specificTripInfo);
					const trip = new Trip({
						origin: cities_ITA_Code[specificTripInfo.origin].name,
						destination: cities_ITA_Code[specificTripInfo.destination].name,
						price: specificTripInfo.price,
						departure_at: specificTripInfo.departure_at,
						return_at: specificTripInfo.return_at,
					});
					tripList.push(trip);
				}
				return tripList;
			})
			.catch(err => {
				console.log(err);
			});
		return results;
	},
};
