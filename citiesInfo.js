const Axios = require('axios');
const cities = 'BCN';

const cities_ITA_Code = Axios.get(
	'http://api.travelpayouts.com/data/en/cities.json'
)
	.then(result => {
		const cities_codes = {};
		const cities_names = {};
		const cities_data = result.data;
		for (let i = 0; i < Object.keys(cities_data).length; ++i) {
			cities_codes[cities_data[i].code] = cities_data[i];
			cities_names[cities_data[i].name] = cities_data[i];
		}

		const results = { code: { ...cities_codes }, names: { ...cities_names } };
		return results;
	})
	.catch(err => {
		console.log(err);
	});
module.exports = cities_ITA_Code;

//exports.dateToString = date => new Date(date).toISOString();
