import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const logger = store => {
  return next => {
      return action => {
          console.log("[Middleware] Dispatching", action)
          const result = next(action);
          console.log("[Middleware] next state", store.getState())
          return result;
      }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

console.log(store.getState())

export default store;