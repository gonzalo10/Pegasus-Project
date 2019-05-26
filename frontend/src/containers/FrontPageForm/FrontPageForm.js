import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actionCreators from '../../actions/cityActions';


import Button from '../../components/UI/Button/Button';
import Grid from '@material-ui/core/Grid';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import NavigationIcon from '@material-ui/icons/Navigation';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



import './FrontPageForm.css';

class FrontPageForm extends Component {
	state = {
		destinationCity: '',
		continue: false,
	};

	handleChange = e => {
		e.preventDefault();
		this.setState({ destinationCity: e.target.value, continue: true });
	};

	render() {
		const { destinationCity } = this.state;
		return (
			<Paper className="root" elevation={1}>
				<Typography variant="h5" component="h3" className="typo">
					<em>Where Is Going To Be Your Next Adventure?</em>
					<div className="roots">
						<form>
							<Grid container spacing={24}>
								<Grid item xs={2} padding={0}>
									<FlightTakeoff
										style={{ textAlign: 'center' }}
										fontSize="large"
										className="box"
									/>
								</Grid>
								<Grid item xs={7}>
									<input
										style={{ width: '100%' }}
										type="text"
										placeholder="Your Homecity"
										name="city"
										onChange={e => this.handleChange(e)}
										value={destinationCity}
									/>
								</Grid>
								<Grid item xs={3}>
									<Link to={`/trips/${destinationCity}`}>
										<Button
											clicked={() => this.props.onStoreCity(destinationCity)}
											disabled={!this.state.continue}>
											<NavigationIcon fontSize="small" />
											Go!
										</Button>
									</Link>
								</Grid>
							</Grid>
						</form>
					</div>
				</Typography>
			</Paper>
		);
	}
}

const mapStateToProps = state => {
	return {
		city: state.city,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onStoreCity: city => dispatch(actionCreators.storeCity(city)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(FrontPageForm));
