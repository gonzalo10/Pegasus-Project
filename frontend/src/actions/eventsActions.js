import * as actionTypes from './types';

export const storeKey = key => dispatch => {
	console.log('eventsActions', key);
	dispatch({
		type: actionTypes.STORE_KEY,
		key: key,
	});
};
