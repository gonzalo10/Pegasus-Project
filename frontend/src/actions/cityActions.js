import * as actionTypes from './types';

export const storeCity = city => dispatch => {
	dispatch({
		type: actionTypes.CHANGE_CITY,
		city: city,
	});
};
