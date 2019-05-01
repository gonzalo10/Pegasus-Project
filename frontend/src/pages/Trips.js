import React, { Component } from 'react';
import AuthContext from '../context/auth-context';
import './Trips.css';
//const axios = require('axios');

class TripPage extends Component {
	state = { destinations: [] };

	static contextType = AuthContext;

	componentDidMount() {
		this.fetchTrips();
	}

	fetchTrips() {
		const requestBody = {
			query: `
				query { 
					trips(origin:"Barcelona") {
						origin,
						destination,
						price
					}
				}
			`,
		};

		fetch('http://localhost:8000/graphql', {
			method: 'POST',
			body: JSON.stringify(requestBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => {
				if (res.status !== 200 && res.status !== 201) {
					throw new Error('Failed!');
				}
				return res.json();
			})
			.then(resData => {
				const trips = resData.data.trips;
				this.setState({ destinations: trips });
				console.log(trips);
			})
			.catch(err => {
				console.log(err);
			});
	}

	componentWillUnmount() {}

	render() {
		const { destinations } = this.state;
		return (
			<React.Fragment>
				Destination
				<div>
					{destinations
						? destinations.map((destination, key) => {
								return (
									<div key={key} className={'trip_info_block'}>
										<h6 className={'trip_info'}>{destination.origin}</h6>
										<h6 className={'trip_info'}>{destination.destination}</h6>
										<h6 className={'trip_info'}>{destination.price}€</h6>
									</div>
								);
						  })
						: null}
				</div>
			</React.Fragment>
		);
	}
}

export default TripPage;
