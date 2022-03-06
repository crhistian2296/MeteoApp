import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { locationReducer } from '../reducers/locationReducer';

const reducers = combineReducers({
  location: locationReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const preoladedState = JSON.parse(localStorage.getItem('reduxState'));

export const store = createStore(
  reducers,
  preoladedState,
  composeEnhancers(applyMiddleware(thunk))
);
