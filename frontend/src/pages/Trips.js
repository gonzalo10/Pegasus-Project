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
						departure_at
						return_at
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
					{console.log(destinations)}
					{destinations ? (
						destinations.map((destination, key) => {
							return (
								<div key={key} className="grid-container trip_info_block">
									<div className="item1">{destination.origin}</div>
									<div className="item2">{destination.destination}</div>
									<div className="item3">Price:{destination.price}€</div>
									<div className="item4">
										Departure:{destination.departure_at}
									</div>
									<div className="item5">Return:{destination.return_at}</div>
								</div>
							);
						})
					) : (
						<div>Loading...</div>
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default TripPage;
