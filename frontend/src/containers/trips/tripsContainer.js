import { connect } from 'react-redux';

import TripsPage from '../../pages/Trips/Trips';

const mapStateToProps = state => {
	return {
		city: state.city,
	};
};

const mapDispatchToProps = dispatch => ({});

const TripsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TripsPage);

export default TripsContainer;
