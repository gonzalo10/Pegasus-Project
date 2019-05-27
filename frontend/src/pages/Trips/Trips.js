import React from 'react';

import AuthContext from '../../context/auth-context';
import './Trips.css';
import Grid from '@material-ui/core/Grid';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import Madrid from '../../assets/img/Madrid.png';
import ButtonBase from '@material-ui/core/ButtonBase';
import FrontPageForm from '../../containers/FrontPageForm/FrontPageForm';

class TripPage extends React.PureComponent {
	state = {
		destinations: [],
		city: null,
	};

	static defaultProps = {
		params: {},
	};

	static contextType = AuthContext;

	componentDidMount() {
		const query = this.props.match.params.id;
		this.setState({ city: query }, () => this.fetchTrips());
	}

	componentDidUpdate() {
		const { city } = this.state;
		const query = this.props.match.params.id;
		console.log('this props', this.props.keyEvent);
		if (query !== city) {
			this.setState({ city: query }, () => this.fetchTrips());
		}
	}

	fetchTrips() {
		const { city } = this.state;
		const requestBody = {
			query: `
				 query { 
					trips(origin:"${city}") {
						origin
						destination
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
				console.log(res);
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

	handleEvents = () => {};

	render() {
		const { destinations } = this.state;
		let trips = <h1>Spinner</h1>;
		if (this.state.city) {
			this.state.destinations.sort((a, b) =>
				a.price > b.price
					? 1
					: a.price === b.price
					? a.departure > b.departure
						? 1
						: -1
					: -1
			);

			trips = (
				<div>
					{destinations.map((destination, key) => {
						return (
							<div key={key}>
								{destination.origin === this.state.city ? (
									<div key={key} className="border">
										<Grid container spacing={24}>
											<Grid item md={8}>
												<Grid
													item
													md
													style={{ padding: '15px', fontSize: '1.5em' }}>
													<Grid container spacing={8}>
														<Grid item>
															{destination.origin}
															<ArrowRightAlt
																className="icon"
																fontSize="large"
															/>
															{destination.destination}
														</Grid>
														<Grid item>
															<ButtonBase
																style={{ fontSize: '1.2em' }}
																fontSize="large">
																Price: {destination.price}€
															</ButtonBase>
														</Grid>
													</Grid>
												</Grid>
												<Grid
													container
													direction="column"
													justify="center"
													alignItems="flex-start">
													<Grid item style={{ paddingTop: '35px' }}>
														Departure: {destination.departure_at}
													</Grid>
													<Grid item style={{ paddingTop: '35px' }}>
														Return: {destination.return_at}
													</Grid>
												</Grid>
												<Grid
													container
													direction="column"
													justify="center"
													alignItems="flex-start">
													<button
														onClick={() => this.props.onStoreKey(destination)}>
														<BookmarkBorder className="icon" fontSize="large" />
														Save
													</button>
												</Grid>
											</Grid>

											<Grid item md={4}>
												<div className="container">
													<img src={Madrid} alt="City" className="imagen" />

													<div className="middle">
														<div className="text">Madrid</div>
													</div>
												</div>
											</Grid>
										</Grid>
									</div>
								) : null}
							</div>
						);
					})}
				</div>
			);
		}

		return (
			<React.Fragment>
				<FrontPageForm />
				{trips}
			</React.Fragment>
		);
	}
}

export default TripPage;
