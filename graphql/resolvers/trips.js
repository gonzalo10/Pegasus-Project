const Axios = require('axios');
const Trip = require('../../models/trip');
const citiesCodes = require('../../citiesInfo');
const token = '269dd9a31218fab6b4e5eb7d10c41003';
const constants = require('../../constants');
const NAMES = constants.NAMES;
const CODE = constants.CODE;

module.exports = {
	trips: async args => {
		const cities_ITA_Code = await citiesCodes;
		const origin_code = await cities_ITA_Code[NAMES][args.origin][CODE];
		const results = await Axios.get(
			`http://api.travelpayouts.com/v1/city-directions?origin=${origin_code}&currency=eur&token=${token}`
		)
			.then(response => {
				const popularDestinationsInfo = response.data.data;
				const popularDestinationsList = Object.keys(popularDestinationsInfo);
				let tripList = [];
				for (let i = 0; i < popularDestinationsList.length; ++i) {
					const specificTripInfo =
						popularDestinationsInfo[popularDestinationsList[i]];
					const trip = new Trip({
						origin: cities_ITA_Code[CODE][specificTripInfo.origin].name,
						destination:
							cities_ITA_Code[CODE][specificTripInfo.destination].name,
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
