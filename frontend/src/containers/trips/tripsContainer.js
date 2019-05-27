import { connect } from 'react-redux';
import * as actionCreators from '../../actions/eventsActions';

import TripsPage from '../../pages/Trips/Trips';

const mapStateToProps = state => {
	return {
		city: state.city,
		keyEvent: state.events,
	};
};

const mapDispatchToProps = dispatch => ({
	onStoreKey: key => dispatch(actionCreators.storeKey(key)),
});

const TripsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TripsPage);

export default TripsContainer;
