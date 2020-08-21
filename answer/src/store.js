import { rootReducer } from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const middleware = [ thunk ];

export const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middleware),
		process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : (f) => f
	)
);
