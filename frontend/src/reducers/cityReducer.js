import { CHANGE_CITY } from '../actions/types';
import { updateObject } from '../shared/utility';

const initialState = {
	city: [],
};

export default function(state = initialState, action) {
	switch (action.type) {
		case CHANGE_CITY:
			console.log('cityReducer', action);
			return {
				...state,
				city: action.city,
			};
		default:
			return state;
	}
}
