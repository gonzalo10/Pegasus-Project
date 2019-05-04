const Axios = require('axios');
const cities = 'BCN';

const cities_ITA_Code = Axios.get(
	'http://api.travelpayouts.com/data/en/cities.json'
)
	.then(result => {
		const cities_data = result.data;
		return cities_data;
	})
	.catch(error => {
		console.log(err);
	});

module.exports = {
	cities: args => cities_ITA_Code,
};

//exports.dateToString = date => new Date(date).toISOString();
