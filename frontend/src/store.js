import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import cityReducer from './reducers/cityReducer';
import eventsReducer from './reducers/eventsReducer';

const logger = store => {
	return next => {
		return action => {
			const result = next(action);
			return result;
		};
	};
};

const rootReducer = combineReducers({
    city: cityReducer,
    events: eventsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(logger, reduxThunk))
);

console.log('STORE STATE', store.getState());
console.log('STORE KEY', store.getState());

export default store;
