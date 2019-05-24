import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const logger = store => {
	return next => {
		return action => {
			const result = next(action);
			return result;
		};
	};
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(logger, reduxThunk))
);

console.log('STORE STATE', store.getState());

export default store;
