import React, { Component } from 'react';

import AuthContext from '../context/auth-context';
import './Events.css';
const axios = require('axios');


class TripPage extends Component {
  state = {
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
		//this.fetchEvents();
		// fetch("https://api.travelpayouts.com/data/cities.json",
		//  {
		// 	 credentials:"include",
		// 		 headers:{
		// 		 'X-Access-Token': '269dd9a31218fab6b4e5eb7d10c41003'
		// 		},
		// 		referrerPolicy:"no-referrer-when-downgrade",
		// 		body:null,
		// 		method:"GET",
		// 		mode:"no-cors"})
		// .then(res => {
		// 	if (res.success !== true) {
		// 		throw new Error(res);
		// 	}
		// 	return res.json();
		// })
		// .then(resData => {
		// 	console.log('primera opcion',resData)
		// })
		// .catch(err => {
		// 	console.log('primera opcion',JSON.stringify(err));
		// });
		// fetch("https://api.travelpayouts.com/v1/prices/cheap?origin=MOW&destination=HKT&depart_date=2019-11&return_date=2019-12&token=269dd9a31218fab6b4e5eb7d10c41003",
		//  {
		// 		 headers:{
		// 		 'X-Access-Token': '269dd9a31218fab6b4e5eb7d10c41003'
		// 		},
		// 		method:"GET",
		// 		mode:"no-cors"})
		// .then(res => {
		// 	if (res.success !== true) {
		// 		throw new Error(res);
		// 	}
		// 	return res.json();
		// })
		// .then(resData => {
		// 	console.log('tercera opcion',resData)
		// })
		// .catch(err => {
		// 	console.log('tercera opcion',JSON.stringify(err));
		// });
	}


	
	fetchEvents() {
		const requestBody = {
			origin:"MOW",
			destination:"HKT",
			depart_date:"2019-11",
			return_date:"2019-12"	
		};
		fetch("https://api.travelpayouts.com/v1/prices/cheap",
		 { 
				cache: 'default',
				method: 'get',
				body: JSON.stringify(requestBody),
				mode: 'cors',
				accept: 'application/json',
				headers : {
					'x-access-token': '269dd9a31218fab6b4e5eb7d10c41003'
				}
			})
		.then(res => {
        if (res.success !== true) {
          throw new Error(res);
        }
        return res.json();
      })
      .then(resData => {
				console.log('Segunda opcion',resData)
      })
      .catch(err => {
        console.log('Segunda err',JSON.stringify(err));
      });
	}
	
  componentWillUnmount() {
  }

  render() {
    return (
      <React.Fragment>
        Destination
			</React.Fragment>
    );
  }
}

export default TripPage;
