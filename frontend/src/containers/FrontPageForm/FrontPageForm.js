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
import Autocomplete from '../../components/UI/AutoComplete/AutoComplete'


import './FrontPageForm.css';



class FrontPageForm extends Component {
	state = {
		destinationCity: '',
		continue: false,
	};

	handleChange = () => {

		this.setState({continue: true });
	};

	render() {
		const { destinationCity } = this.state;
		return (
			<Paper className="root" elevation={1}>
				<Typography variant="h5" component="h3" className="typo">
					<em>Where Is Going To Be Your Next Adventure?</em>
					<div className="roots" >
					<Link to={`/trips/${destinationCity}`}>
						<form style={{padding: '10px', position: 'relative'}}>
							<Grid container spacing={24}>
								<Grid item xs={2} padding={0}>
									<FlightTakeoff
										style={{ textAlign: 'center' }}
										fontSize="large"
										className="box"
									/>
								</Grid>
								<Grid item xs={7}>
									<Autocomplete
										options={[
										'Madrid',
										'Tenerife',
										'Mayorca',
										'Burgos',
										]}
										style={{ width: '100%' }}
										name="city"
										userInput={destinationCity}
									/>
								</Grid>
								<Grid item xs={3}>
									
										<Button
											clicked={() => this.props.onStoreCity(destinationCity)}
											disabled={!this.state.continue}>
											<NavigationIcon fontSize="small" />
											Go!
										</Button>
									
								</Grid>
							</Grid>
						</form>
						</Link>
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
