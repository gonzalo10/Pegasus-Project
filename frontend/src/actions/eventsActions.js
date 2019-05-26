import * as actionTypes from './types';

export const storeKey = key => dispatch => {
	dispatch({
		type: actionTypes.STORE_KEY,
		key: key,
	});
};