import React, { Component } from 'react';
import AuthContext from '../../context/auth-context';
import './Trips.css';
import PaperSheet from '../../components/UI/PaperSheet/PaperSheet'
import Grid from '@material-ui/core/Grid';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt'
import Madrid from '../../assets/img/Madrid.png'


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
					trips(origin:"Madrid") {
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
				<PaperSheet />
				<div>
					{destinations ? (
						destinations.map((destination, key) => {
							return (
								<div key={key} className='main-wrap border'>
								<div className='sidebar'>
								<Grid className='Upgrid' container spacing={24}>
       								<Grid  item xs={4} >
										<div className="city">{destination.origin}</div>
										<ArrowRightAlt fontSize="large"/>
										<div className="city">{destination.destination}</div>
									</Grid>
									<Grid  item xs={4} >
										<div className="city">Price: {destination.price}€</div>
									</Grid>
								</Grid>
								<Grid container spacing={24}>
									<Grid  item xs={3} >
										<div className="item4">
											Departure: {destination.departure_at}
										</div>
									</Grid>
									<Grid  item xs={3} >
										<div className="item5">Return: {destination.return_at}</div>
									</Grid>

        						</Grid>
								</div>
								<div className='content-wrap'>
									<div className='container'>
  										<img src={Madrid} alt="Avatar" className="image" />
  										<div className="middle">
   						 					<div className="text">Madrid</div>
 										</div>
									</div>
								</div>
								{/* <div key={key} className="grid-container trip_info_block">
									
								</div> */}

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
