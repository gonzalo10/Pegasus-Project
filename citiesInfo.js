const Axios = require('axios');
const cities = 'BCN';

module.exports = {
	cities: args => cities,
};
// exports.citiesCodes = args => 'Barcelona';
// const cities_ITA_Code = Axios.get(
// 	'http://api.travelpayouts.com/data/en/cities.json'
// )
// 	.then(result => {
// 		console.log(result.data);
// 		const cities_data = result.data;

// 		return result.data;
// 	})
// 	.catch(error => {
// 		console.log(err);
// 	});
// 	console.log(args);
// 	return 'Barcelona';
// };

//exports.dateToString = date => new Date(date).toISOString();
