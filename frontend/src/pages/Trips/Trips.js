import React, { Component } from 'react';
import AuthContext from '../../context/auth-context';
import './Trips.css';
import Grid from '@material-ui/core/Grid';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt'
import Madrid from '../../assets/img/Madrid.png'
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import FrontPageForm from '../../containers/FrontPageForm/FrontPageForm';



//const axios = require('axios');


class TripPage extends Component {
	state = { destinations: [], city: 'Bangkok' };

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
				console.log(res)
				if (res.status !== 200 && res.status !== 201) {
					throw new Error('Failed!');
				}
				return res.json();
			})
			.then(resData => {
				console.log(resData)
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
				<FrontPageForm />
				<div>
					{destinations ? (
						destinations.map((destination, key) => {
							
							return (
								
								<div key={key}>
								{ destination.destination === this.state.city ?  
								<div key={key} className='border'>
									<Grid container spacing={24}>

										<Grid item md={8}>
											<Grid item md>
												<Grid item>
													{destination.origin}
													<ArrowRightAlt className='icon' fontSize="large"/>
													{destination.destination}
													<ButtonBase className="price">Price: {destination.price}€</ButtonBase>
												</Grid>
											</Grid>
											<Grid container direction="column" justify="center" alignItems="flex-start">
												<Grid item>

														Departure: {destination.departure_at}

												</Grid>
												<Grid  item>

														Return: {destination.return_at}

												</Grid>
											</Grid>
										</Grid>
        							
										<Grid item md={4}>
											<div className='container'>
												<img src={Madrid} alt="City" className="imagen" />

												<div className="middle">
													<div className="text">Madrid</div>
												</div> 
											</div>
									</Grid>
									</Grid>

								</div> : null}

							
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
