import { STORE_KEY } from '../actions/types';
import { updateObject } from '../shared/utility';

const initialState = {
	key: [],
};

export default function(state = initialState, action) {
	switch (action.type) {
		case STORE_KEY:
			console.log('eventsReducer', action);
			return {
				...state,
				key: action.key,
			};
		default:
			return state;
	}
}